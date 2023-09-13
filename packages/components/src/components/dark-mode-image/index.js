import css from './index.css?inline'

class DarkModeImage extends HTMLElement {

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
    return [ 'src', 'src-light', 'src-dark', 'alt' ]
  }

  get props()
  {
    return {
      src: this.getAttribute('src'),
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
    console.log('attributeChangedCallback()', name)
    switch (name)
    {
      case 'src':
      case 'src-light':
      case 'src-dark':
        this.#updateImage(name, newValue)
        break
      case 'alt':
        break
    }
  }

  /**
   * mounted component
   */
  connectedCallback()
  {
    const html = document.querySelector('html')
    const observer = new MutationObserver(this.#foo)
    console.log(html)
    // TODO: 쉐도우돔 덕부터 스타일시트로 다크모드를 판변할 수 없게 되었다.
    // TODO: `MutationObserver` API로 태그의 속성값이 변하면 콜백함수 실행하는 방법을 찾아냈다.
    // TODO: 내부의 값을 업데이트 시켜서 컨트롤 하는수밖에 없겠다.
    observer.observe(html, {
      attributes: true,
    })
  }

  /**
   * unmounted component
   */
  disconnectedCallback()
  {
    //
  }

  #updateImage(key, src)
  {
    // TODO: 이미지 엘리먼트 컨트롤
    // TODO: 엘리먼트가 존재하면 주소를 교체한다.
    // TODO: 엘리먼트가 없다면 새로 만든다.
    if (false)
    {

    }
    else
    {
      const img = new Image()
      img.src = src
      img.dataset.theme = key
      img.setAttribute('alt', this.props.alt || '')
      this.root.appendChild(img)
    }
  }

  #foo()
  {
    console.log('foooo()')
  }

}

export default DarkModeImage
