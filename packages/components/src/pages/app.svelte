<header class="header">
  <div class="header__body">
    <h1>
      <a
        href="./"
        class:disabled={$page === ''}
        on:click|preventDefault={() => page.update('')}>
        assets / components
      </a>
    </h1>
    <p>@redgoose/images :: 서비스 컴포넌트 프리뷰 영역</p>
  </div>
  <nav class="header__nav">
    <button
      type="button"
      disabled={$theme === 'system'}
      on:click={() => { $theme = 'system' }}>
      System
    </button>
    <button
      type="button"
      disabled={$theme === 'light'}
      on:click={() => { $theme = 'light' }}>
      Light
    </button>
    <button
      type="button"
      disabled={$theme === 'dark'}
      on:click={() => { $theme = 'dark' }}>
      Dark
    </button>
  </nav>
</header>
<div class="container">
  <svelte:component this={activeComponent}/>
</div>

<script>
import { onMount, onDestroy } from 'svelte'
import { page, theme } from '../store/base.js'
let activeComponent

$: changePage($page || '').then()
$: changeTheme($theme || '')

async function changePage(key)
{
  // $page = key
  page.update(key)
  if (key)
  {
    activeComponent = (await import((`../components/${$page}/page.svelte`))).default
  }
  else
  {
    activeComponent = (await import('./welcome.svelte')).default
  }
}

function changeTheme(theme)
{
  const html = document.querySelector('html')
  html.dataset.theme = theme
}

function onPopstate(e)
{
  $page = e.state?.page
}

onMount(() => {
  window.addEventListener('popstate', onPopstate)
})
onDestroy(() => {
  window.removeEventListener('popstate', onPopstate)
})
</script>

<style src="./app.scss" lang="scss"></style>
