<article class="component-page">
  <h1>dark-mode-image component</h1>
  <dark-mode-image
    src="https://goose.redgoose.me/data/upload/original/202106/slideshow-001-light.png"
    src-light="https://goose.redgoose.me/data/upload/original/202106/slideshow-001-light.png"
    src-dark="https://goose.redgoose.me/data/upload/original/202106/slideshow-001-dark.png"
    alt="fooooo"/>
</article>

<script>
import { onMount, onDestroy } from 'svelte'
import DarkModeImage from './index.js'

const elementKey = 'dark-mode-image'

onMount(() => {
  if (!customElements.get(elementKey))
  {
    customElements.define(elementKey, DarkModeImage)
  }
})
onDestroy(() => {

})
</script>

<style src="./page.scss" lang="scss"></style>
