import { iconLight, iconDark } from './assets.js'
import css from './index.css?inline'

/**
 * dark mode switch
 * @property {HTMLElement} root
 * @property {MutationObserver} #htmlObserver
 */
class DarkModeSwitch extends HTMLElement {

  #htmlObserver

  constructor()
  {
    super()
    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = `<button type="button" class="dark-mode-switch"><i>${iconLight}${iconDark}</i></button>`
    const style = new CSSStyleSheet()
    style.replaceSync(css)
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.shadowRoot.adoptedStyleSheets = [ style ]
    this.root = this.shadowRoot.childNodes[0]
    this.ready = false
  }

  static get observedAttributes()
  {
    return [ 'theme' ]
  }

  get props()
  {
    return {
      theme: this.getAttribute('theme'),
    }
  }

  /**
   * change attributes
   */
  attributeChangedCallback(name, oldValue, newValue)
  {
    if (oldValue === newValue || !this.ready) return
    switch (name)
    {
      case 'theme':
        this.#changeTheme(newValue)
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
        let value = record.target.getAttribute(attrName)
        if (!['light', 'dark'].includes(value)) value = this.#getTheme()
        this.#changeTheme(value)
      })
    })
    this.#htmlObserver.observe(html, {
      attributes: true,
    })
    this.root.addEventListener('click', this.#onClickButton.bind(this))
    this.ready = true
    this.#changeTheme(this.props.theme)
  }

  /**
   * unmounted component
   */
  disconnectedCallback()
  {
    this.#htmlObserver.disconnect()
    this.root.removeEventListener('click', this.#onClickButton.bind(this))
    this.ready = false
  }

  /**
   * on click button event
   */
  #onClickButton()
  {
    const theme = this.props.theme === 'dark' ? 'light' : 'dark'
    this.#changeTheme(theme)
    this.dispatchEvent(new CustomEvent('change', {
      detail: { theme },
    }))
  }

  /**
   * update theme
   * @param {string} theme
   */
  #changeTheme(theme)
  {
    const { root } = this
    switch (theme) {
      case 'dark':
        root.setAttribute('title', 'Dark mode')
        root.classList.remove('light')
        root.classList.add('dark')
        break;
      case 'light':
        root.setAttribute('title', 'Light mode')
        root.classList.remove('dark')
        root.classList.add('light')
        break;
    }
  }

  /**
   * get theme
   * @return {string}
   */
  #getTheme()
  {
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'
  }

}

export default DarkModeSwitch
