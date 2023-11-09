<article class="component-page">
  <header class="header">
    <h1>Dark mode image</h1>
    <p>다크모드로 사용할 수 있는 이미지</p>
  </header>
  <form class="form" on:submit|preventDefault={onSubmit}>
    <fieldset>
      <legend>manage image information form</legend>
      <dl>
        <dt><label for="src-light">src (light)</label></dt>
        <dd>
          <input
            type="text"
            name="src-light"
            id="src-light"
            placeholder="https://"
            bind:value={imageInfoForm.srcLight}/>
        </dd>
      </dl>
      <dl>
        <dt><label for="src-dark">src (dark)</label></dt>
        <dd>
          <input
            type="text"
            name="src-dark"
            id="src-dark"
            placeholder="https://"
            bind:value={imageInfoForm.srcDark}/>
        </dd>
      </dl>
      <dl>
        <dt><label for="alt">alt</label></dt>
        <dd>
          <input
            type="text"
            name="alt"
            id="alt"
            placeholder="message"
            bind:value={imageInfoForm.alt}/>
        </dd>
      </dl>
    </fieldset>
    <nav>
      <button type="button">초기화</button>
      <button type="submit">적용하기</button>
    </nav>
  </form>
  <div class="preview">
    <dark-mode-image
      src-light={imageInfo.srcLight}
      src-dark={imageInfo.srcDark}
      alt={imageInfo.alt}/>
  </div>
  <div
    aria-hidden="true"
    class="guide-content redgoose-body redgoose-body--dark">
    {@html markdownContent}
  </div>
</article>

<script>
import { onMount, onDestroy } from 'svelte'
import { marked } from 'marked'
import DarkModeImage from './index.js'
import readme from './README.md?raw'

const elementKey = 'dark-mode-image'
let imageInfoForm = {
  srcLight: 'https://goose.redgoose.me/data/upload/original/202106/slideshow-001-light.png',
  srcDark: 'https://goose.redgoose.me/data/upload/original/202106/slideshow-001-dark.png',
  alt: 'image message',
}
let imageInfo = Object.assign({}, imageInfoForm)
$: markdownContent = marked.parse(readme, {})

function onSubmit()
{
  imageInfo = Object.assign({}, imageInfoForm)
}

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
