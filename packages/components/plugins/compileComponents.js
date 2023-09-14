import fs from 'fs'
import { build } from 'esbuild'
import { ESPluginTextCss } from './libs/esbuild.js'

const pathDest = '../../dest/components'

function getDirectoryPath()
{
  let result = []
  const files = fs.readdirSync('src/components', { withFileTypes: true })
  files.forEach(file => {
    if (!file.isDirectory()) return
    const name = file.name
    const path = `${file.path}/${name}`
    if (!fs.existsSync(`${path}/index.js`)) return
    let meta = fs.readFileSync(`${path}/meta.json`, 'utf8')
    meta = JSON.parse(meta)
    result.push({
      name,
      path: `${path}/index.js`,
      className: meta.className,
    })
  })
  return result
}

async function compile({ name, path })
{
  await build({
    platform: 'browser',
    bundle: true,
    minify: true,
    format: 'esm',
    entryPoints: [ path ],
    outfile: `${pathDest}/${name}.js`,
    plugins: [ ESPluginTextCss ],
  })
  return true
}

function createExports(components)
{
  const str = components.map(o => {
    return `export { ${o.className} as default } from './${o.name}.js'`
  }).join('\n')
  fs.writeFileSync(`${pathDest}/exports.js`, str, {})
}

function compileComponents()
{
  return {
    name: 'compile-components',
    apply: 'build',
    closeBundle()
    {
      // get component info
      const components = getDirectoryPath()
      // build component classes
      Promise.all(components.map(compile)).then()
      // create exports.js file
      createExports(components)
    },
  }
}

export default compileComponents
