import { mount } from 'svelte'
import App from './pages/app.svelte'
import './main.scss'

mount(App, {
  target: document.getElementById('app'),
  props: {},
})
