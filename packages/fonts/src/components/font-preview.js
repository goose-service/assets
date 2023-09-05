import css from './font-preview.scss?inline'

class FontPreview extends HTMLElement {

  constructor()
  {
    super()
    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = `
      <div class="font-preview">
        <div contenteditable="true" class="font-preview__body"></div>
      </div>
    `.trim()
    const style = new CSSStyleSheet()
    style.replaceSync(css)
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.shadowRoot.adoptedStyleSheets = [ style ]
    this.root = this.shadowRoot.childNodes[0]
    this.preview = this.root.querySelector('& > div')
  }

  static get observedAttributes()
  {
    return [ 'keyword', 'font', 'weight' ]
  }

  attributeChangedCallback(name, oldValue, newValue)
  {
    if (oldValue === newValue) return
    switch (name)
    {
      case 'weight':
        this.root.style.setProperty(`--weight`, newValue)
        break
      case 'font':
        this.root.style.setProperty(`--font`, `${newValue}, sans-serif`)
        break
      case 'keyword':
        this.preview.innerText = newValue
        break
    }
  }

}

export default FontPreview
