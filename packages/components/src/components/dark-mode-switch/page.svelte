<article class="component-page">
  <header class="header">
    <h1>Dark mode switch</h1>
    <p>다크모드를 변경하는 스위치 UI 컴포넌트</p>
  </header>
  <div class="preview center">
    <dark-mode-switch theme={theme} on:change={onChangeTheme}/>
  </div>
  <div
    aria-hidden="true"
    class="guide-content redgoose-body redgoose-body--dark">
    {@html markdownContent}
  </div>
</article>

<script>
import { onMount } from 'svelte'
import { marked } from 'marked'
import DarkModeSwitch from './index.js'
import readme from './README.md?raw'

const html = document.querySelector('html')
const elementKey = 'dark-mode-switch'
let theme = html.dataset.theme
if (![ 'light', 'dark' ].includes(theme))
{
  theme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'
}

$: markdownContent = marked.parse(readme, {})

function onChangeTheme(e)
{
  theme = e.detail.theme
  html.dataset.theme = theme
}

onMount(() => {
  if (!customElements.get(elementKey))
  {
    customElements.define(elementKey, DarkModeSwitch)
  }
})
</script>

<style src="./page.scss" lang="scss"></style>
