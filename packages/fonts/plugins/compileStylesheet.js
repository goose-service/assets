import path from 'path'
import fs from 'fs'
import * as sass from 'sass'

const pathDest = path.resolve('../../dest/fonts')

export function compileStylesheet()
{
  return {
    name: 'compile-stylesheet',
    apply: 'build',
    closeBundle()
    {
      const output = sass.compile(path.resolve('./src/fonts/index.scss'))
      fs.writeFileSync(path.resolve(pathDest, 'index.css'), output.css)
    },
  }
}
