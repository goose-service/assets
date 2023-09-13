const STORAGE_KEY = 'assets-components'

/**
 * get value in localStorage
 */
export function get()
{
  const str = window.localStorage.getItem(STORAGE_KEY)
  return str ? JSON.parse(str) : {}
}

/**
 * set value in localStorage
 */
export function set(value)
{
  if (!value) return
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
    ...get(),
    ...value,
  }, null, 0))
}
