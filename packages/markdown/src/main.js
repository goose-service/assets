import { Marked } from 'marked'
import * as examples from './examples'
import './main.scss'

// set marked
const marked = new Marked({
  gfm: true,
  breaks: true,
  silent: true,
})

const $html = document.querySelector('html')
const $content = document.getElementById('content')
const $examples = document.getElementById('nav-examples')
const $themes = document.getElementById('nav-theme')

const storageKey = 'assets-markdown'
const options = new Proxy(getStorageOptions(), {
  get: (obj, prop) => (obj[prop]),
  set: (obj, prop, value) => {
    if (obj[prop] === value) return true
    obj[prop] = value
    switch (prop)
    {
      case 'example':
        changeExample(value)
        break
      case 'theme':
        changeTheme(value)
        break
    }
    return true
  },
})

function onClickExampleButtons(e)
{
  options.example = e.currentTarget.dataset.name
}
function onClickThemeButtons(e)
{
  options.theme = e.currentTarget.dataset.theme
}

function changeExample(value, save = true)
{
  $content.innerHTML = String(marked.parse(examples[value]))
  const $button = $examples.querySelector(`button[data-name=${value}]`)
  for (const el of $examples.querySelectorAll('button'))
  {
    el.removeAttribute('disabled')
  }
  $button.setAttribute('disabled', 'disabled')
  $html.scrollTo(0, 0)
  if (save) saveStorageOptions()
}
function changeTheme(value, save = true)
{
  $html.dataset.theme = value
  const $button = $themes.querySelector(`button[data-theme=${value}]`)
  for (const el of $themes.querySelectorAll('button'))
  {
    el.removeAttribute('disabled')
  }
  $button.setAttribute('disabled', 'disabled')
  if (save) saveStorageOptions()
}

function getStorageOptions()
{
  try
  {
    const storage = window.localStorage.getItem(storageKey)
    if (!storage) throw 'no-storage'
    return JSON.parse(storage)
  }
  catch (e)
  {
    return {
      example: 'ex1',
      theme: 'system',
    }
  }
}
function saveStorageOptions()
{
  window.localStorage.setItem(storageKey, JSON.stringify(options))
}

// set events
for (const el of $examples.querySelectorAll('button'))
{
  el.addEventListener('click', onClickExampleButtons)
}
for (const el of $themes.querySelectorAll('button'))
{
  el.addEventListener('click', onClickThemeButtons)
}


// actions
changeExample(options.example, false)
changeTheme(options.theme, false)
