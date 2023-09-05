import path from 'path'
import fs from 'fs'
import * as sass from 'sass'

const pathDest = path.resolve('../../dest/fonts')

// compile scss to css
const output = sass.compile(path.resolve('./src/fonts/index.scss'))

fs.rmSync(pathDest, {
  recursive: true,
  force: true,
})

// make directory
fs.mkdirSync(pathDest, {
  recursive: true,
})

// write css
fs.writeFileSync(path.resolve(pathDest, 'index.css'), output.css)

// copy font files
const list = fs.readdirSync(path.resolve('./src/fonts'), {
  withFileTypes: true
})
list.forEach(dir => {
  if (!dir.isDirectory()) return
  fs.cpSync(
    path.resolve(`./src/fonts/${dir.name}`),
    path.resolve(pathDest, dir.name),
    { recursive: true }
  )
})
