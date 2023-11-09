## Usage

```html
<dark-mode-switch theme="dark"/>

<script src="https://assets.redgoose.me/components/index.js"></script>
<script>
customElements.define('dark-mode-switch', Goose.DarkModeSwitch)

const $html = document.querySelector('html')
const $switch = document.querySelector('dark-mode-switch')

$switch.addEventListener('change', function(e) {
  const { theme } = e.detail
  $switch.setAttribute('theme', theme)
  html.dataset.theme = theme
})
</script>
```

## Attributes

컴포넌트에서 사용하는 옵션

- `theme`: 테마


## Events

컴포넌트에서 사용하는 이벤트

- `change`: 스위치의 테마값이 바꼈을때 호출되는 이벤트
