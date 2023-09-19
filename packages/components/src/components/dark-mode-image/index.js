import css from './index.css?inline'

/**
 * DarkModeImage
 * @property {HTMLElement} root
 * @property {MutationObserver} #htmlObserver
 */
class DarkModeImage extends HTMLElement {

  #htmlObserver

  constructor()
  {
    super()
    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = `<figure class="dark-mode-image"></figure>`
    const style = new CSSStyleSheet()
    style.replaceSync(css)
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.shadowRoot.adoptedStyleSheets = [ style ]
    this.root = this.shadowRoot.childNodes[0]
  }

  static get observedAttributes()
  {
    return [ 'src-light', 'src-dark', 'alt' ]
  }

  get props()
  {
    return {
      srcLight: this.getAttribute('src-light'),
      srcDark: this.getAttribute('src-dark'),
      alt: this.getAttribute('alt'),
    }
  }

  /**
   * change attributes
   */
  attributeChangedCallback(name, oldValue, newValue)
  {
    if (oldValue === newValue) return
    switch (name)
    {
      case 'src-light':
      case 'src-dark':
        this.#updateImage(name, newValue)
        break
      case 'alt':
        this.#updateAlt(newValue)
        break
    }
  }

  /**
   * mounted component
   */
  connectedCallback()
  {
    const html = document.querySelector('html')
    this.#htmlObserver = new MutationObserver(mutations => {
      mutations.forEach(record => {
        const attrName = record.attributeName
        if (record.type !== 'attributes' || attrName !== 'data-theme') return
        this.#updateTheme(record.target.getAttribute(attrName))
      })
    })
    this.#htmlObserver.observe(html, {
      attributes: true,
    })
    this.#updateTheme(html.dataset.theme)
  }

  /**
   * unmounted component
   */
  disconnectedCallback()
  {
    this.#htmlObserver.disconnect()
  }

  /**
   * update image
   * @param {string} key
   * @param {string} src
   */
  #updateImage(key, src)
  {
    key = key.replace(/^src-/, '')
    const imgElement = this.root.querySelector(`img[data-type='${key}']`)
    if (imgElement)
    {
      imgElement.src = src
    }
    else
    {
      const img = new Image()
      img.src = src
      img.dataset.type = key
      img.setAttribute('alt', this.props.alt || '')
      this.root.appendChild(img)
    }
  }

  /**
   * update alt
   * @param {string} keyword
   */
  #updateAlt(keyword)
  {
    const elements = this.root.querySelectorAll('img')
    for (const element of elements)
    {
      element.alt = keyword
    }
  }

  /**
   * update theme
   * @param {string} theme
   */
  #updateTheme(theme)
  {
    this.root.dataset.theme = theme || ''
  }

}

export default DarkModeImage
