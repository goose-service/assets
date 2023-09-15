import fs from 'fs'
import { build } from 'esbuild'
import { umdWrapper } from 'esbuild-plugin-umd-wrapper'
import { ESPluginTextCss } from './libs/esbuild.js'

const pathDest = '../../dest/components'
const completeObjectName = 'Goose'

function getDirectoryPath()
{
  let result = []
  const files = fs.readdirSync('src/components', { withFileTypes: true })
  files.forEach(file => {
    if (!file.isDirectory()) return
    const name = file.name
    const path = `${file.path}/${name}`
    if (!fs.existsSync(`${path}/index.js`)) return
    result.push({
      name,
      path: `${path}/index.js`,
    })
  })
  return result
}

async function compile({ name, path })
{
  await build({
    platform: 'browser',
    outfile: `${pathDest}/${name}/index.js`,
    bundle: true,
    minify: true,
    format: 'esm',
    entryPoints: [ path ],
    plugins: [ ESPluginTextCss ],
  })
  return true
}

function createComplete(components)
{
  build({
    platform: 'browser',
    bundle: true,
    minify: true,
    format: 'umd',
    entryPoints: [ 'src/components/index.js' ],
    outfile: `${pathDest}/index.js`,
    plugins: [
      ESPluginTextCss,
      umdWrapper({
        libraryName: completeObjectName,
      }),
    ],
  }).then()
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
      createComplete(components)
    },
  }
}

export default compileComponents
