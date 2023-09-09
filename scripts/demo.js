import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'

const app = new Hono()
app.get('/*', serveStatic({
  root: './dest/',
}))
app.notFound(context => {
  return context.text('404 / Page not found.', 404)
})
app.onError((err, c) => {
  console.error(err.message)
  return c.text('500 / Internal server error.', 500)
})

export default {
  port: 4000,
  fetch: app.fetch,
}
