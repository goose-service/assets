import { randomPick, wordEng, wordKor } from './example'
import FontPreview from './components/font-preview'

customElements.define('font-preview', FontPreview)

// set keyword
const example = {
  en: randomPick(wordEng),
  ko: randomPick(wordKor),
}
const $previews = {
  en: document.querySelectorAll('[data-type=en] font-preview'),
  ko: document.querySelectorAll('[data-type=ko] font-preview'),
}
for (const $preview of $previews.en)
{
  $preview.setAttribute('keyword', example.en)
}
for (const $preview of $previews.ko)
{
  $preview.setAttribute('keyword', example.ko)
}
