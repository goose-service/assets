import { readFile } from 'fs/promises'
import { transform } from 'esbuild'

export const ESPluginTextCss = {
  name: 'ESPluginCSSBundle',
  setup(build) {
    build.onLoad({ filter: /\.css$/ }, async (args) => {
      const f = await readFile(args.path)
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
