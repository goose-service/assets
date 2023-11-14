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

<style>
dark-mode-switch {
  --dark-switch-width: 80px;
  --dark-switch-height: 36px;
  --dark-switch-padding: 4px;
  --dark-switch-icon-size: 20px;
  --dark-switch-bg: orange;
}
html[data-theme=dark]:is(dark-mode-switch) {
  --dark-switch-bg: blue;
}
</style>
```

## Attributes

컴포넌트에서 사용하는 옵션

- `theme`: 테마


## Events

컴포넌트에서 사용하는 이벤트

- `change`: 스위치의 테마값이 바꼈을때 호출되는 이벤트


## stylesheet

외부에서 스타일을 변형할 수 있습니다.

- `--dark-switch-width`: 가로 사이즈 (48px)
- `--dark-switch-height`: 세로 사이즈 (24px)
- `--dark-switch-padding`: 바깥과 볼의 여백 (2px)
- `--dark-switch-bg`: 바깥의 배경색 (hsla(0 0% 100%))
- `--dark-switch-shadow`: 바깥의 그림자 (inset 0 2px 16px hsla(0 0% 0% / 15%))
- `--dark-switch-inner-bg`: 볼의 배경색 (hsla(0 0% 100%))
- `--dark-switch-inner-shadow`: 볼의 그림자 (0 0 6px hsla(0 0% 0% / 20%))
- `--dark-switch-active-offset`: 엑티브 상태에서 볼이 이동하는 간격 (4px)
- `--dark-switch-focus-color`: 포커스 상태의 외곽선 색 (hsl(350 70% 41%))
- `--dark-switch-focus-width`: 포커스 상태의 외곽선 두께 (2px)
- `--dark-switch-icon-size`: 아이콘 사이즈 (12px)
- `--dark-switch-icon-color-light`: 라이트모드 아이콘 색 (hsl(10, 92%, 60%))
- `--dark-switch-icon-color-dark`: 다크모드 아이콘 색 (hsl(190, 100%, 72%))
