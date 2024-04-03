import { defineConfig, loadEnv } from 'vite'
import { compileStylesheet } from './plugins/compileStylesheet'

const config = defineConfig(({ mode }) => {
  const path = import.meta.dir
  const env = loadEnv(mode, path)
  return {
    base: './',
    server: {
      host: '0.0.0.0',
      port: 4000,
      open: false,
    },
    build: {
      outDir: '../../dest/markdown',
      assetsDir: 'assets',
      emptyOutDir: true,
      rollupOptions: {
        output: {
          // assetFileNames: (assetInfo) => {
          //   const info = assetInfo.name.split('.')
          //   const name = info[0]
          //   const ext = info[info.length - 1]
          //   return `[name]-[hash][extname]`
          // },
        },
      },
    },
    plugins: [
      compileStylesheet(),
    ],
  }
})

export default config
