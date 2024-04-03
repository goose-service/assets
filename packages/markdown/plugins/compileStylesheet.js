import path from 'bun:path'
import * as sass from 'sass'

const pathDest = '../../dest/markdown'

export function compileStylesheet()
{
  return {
    name: 'compile-stylesheet',
    apply: 'build',
    async closeBundle()
    {
      const output = sass.compile(path.resolve('./src/markdown/index.scss'))
      await Bun.write(path.resolve(pathDest, 'index.css'), output.css)
    },
  }
}
