import { defineConfig, loadEnv } from 'vite'

const config = defineConfig(({ mode }) => {
  const path = process.cwd()
  const env = loadEnv(mode, path)
  return {
    server: {
      host: '0.0.0.0',
      port: 4000,
      open: false,
    },
  }
})

export default config
