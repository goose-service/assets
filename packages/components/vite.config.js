import { defineConfig, loadEnv } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'
import compileComponents from './plugins/compileComponents'

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
      outDir: '../../dest/components',
      assetsDir: 'assets',
      emptyOutDir: true,
      rollupOptions: {
        output: {
          // entryFileNames: 'assets/[name]-[hash].js',
          // assetFileNames: (assetInfo) => {},
        },
      },
    },
    plugins: [
      svelte({
        preprocess: sveltePreprocess(),
        compilerOptions: {},
        onwarn(warning, defaultHandler)
        {
          // console.log('======>', warning.code)
          switch (warning.code)
          {
            case 'css-unused-selector':
              return
          }
        },
      }),
      compileComponents(),
    ],
  }
})

export default config
