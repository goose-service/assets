## Usage

```html
<dark-mode-image
  src-light="img-light.jpg"
  src-dark="img-dark.jpg"
  alt="message"/>

<script type="module">
import DarkModeImage from './dark-mode-image.js'
customElements.define('dark-mode-image', DarkModeImage)
</script>
```

## Attributes

컴포넌트에서 사용하는 옵션

- `src-light`: 라이트모드에서 표시되는 이미지 주소
- `src-dark`: 다크모드에서 표시되는 이미지 주소
- `alt`: 이미지 설명
