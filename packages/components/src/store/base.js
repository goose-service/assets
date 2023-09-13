import { writable } from 'svelte/store'
import * as storage from '../lib/storage.js'

function createPage()
{
  const page = location.hash.replace(/^#/, '') || ''
  const { subscribe, set, update } = writable(page)
  return {
    subscribe,
    update: (newValue => update((oldValue) => {
      if (newValue === oldValue) return oldValue
      const url = newValue ? `#${newValue}` : './'
      history.pushState({ page: newValue }, undefined, url)
      return newValue
    })),
    set: (newValue) => set(newValue),
  }
}

function createTheme()
{
  const getTheme = storage.get()?.theme || ''
  const { subscribe, set, update } = writable(getTheme)
  return {
    subscribe,
    set: (newValue) => {
      storage.set({ theme: newValue })
      set(newValue)
    },
  }
}

export const page = createPage()
export const theme = createTheme()
