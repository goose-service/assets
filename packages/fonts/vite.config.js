import { defineConfig, loadEnv } from 'vite'
import { compileStylesheet } from './plugins/compileStylesheet'

const config = defineConfig(({ mode }) => {
  const path = process.cwd()
  const env = loadEnv(mode, path)
  return {
    base: './',
    server: {
      host: '0.0.0.0',
      port: 4000,
      open: false,
    },
    build: {
      outDir: '../../dest/fonts',
      assetsDir: '',
      emptyOutDir: true,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.')
            const name = info[0]
            const ext = info[info.length - 1]
            switch (ext)
            {
              case 'woff2':
                if (/^ortsa/.test(name))
                {
                  return `ortsa/[name][extname]`
                }
                else if (/^Pretendard/.test(name))
                {
                  return `pretendard/[name][extname]`
                }
                break
            }
            return `[name]-[hash][extname]`
          },
        },
      },
    },
    plugins: [
      compileStylesheet(),
    ],
  }
})

export default config
