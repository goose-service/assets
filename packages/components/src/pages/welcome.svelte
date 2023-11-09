<article class="welcome">
  <p class="welcome__description">
    붉은거위 서비스에서 사용되는 컴포넌트들의 목록
  </p>
  <div class="welcome__body">
    {#each contents as content}
      <section class="component-section">
        <header>
          <h1>{content.title}</h1>
          <p>{content.description}</p>
        </header>
        <nav>
          <button
            type="button"
            data-key={content.key}
            on:click={onClick}>
            바로가기
          </button>
        </nav>
      </section>
    {/each}
  </div>
</article>

<script>
import { page } from '../store/base.js'

const contents = [
  {
    key: 'dark-mode-image',
    title: '다크모드 이미지',
    description: '라이드모드와 다크모드를 변경할때 표시되는 이미지가 변할때 사용한다.',
  },
  {
    key: 'dark-mode-switch',
    title: '다크모드 변경 스위치',
    description: '라이드모드와 다크모드 UI 컴포넌트',
  }
]

function onClick(e)
{
  page.update(e.currentTarget.dataset.key)
}
</script>

<style src="./welcome.scss" lang="scss"></style>
