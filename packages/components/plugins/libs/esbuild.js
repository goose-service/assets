import { transform } from 'esbuild'

export const ESPluginTextCss = {
  name: 'ESPluginCSSBundle',
  setup(build) {
    build.onLoad({ filter: /\.css$/ }, async (args) => {
      let f = await Bun.file(args.path)
      f = await f.arrayBuffer()
      f = Buffer.from(f)
      const css = await transform(f, {
        loader: 'css',
        minify: true,
      })
      return {
        loader: 'text',
        contents: css.code,
      }
    })
  },
}
