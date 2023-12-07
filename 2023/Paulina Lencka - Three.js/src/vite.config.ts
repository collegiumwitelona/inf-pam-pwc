import { defineConfig } from 'vite'
import { templateCompilerOptions } from '@tresjs/core'

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3030,
    hmr: {
      host: "localhost"
    },
    watch: {
      usePolling: true,
    },
  },
  vue: {
    ...templateCompilerOptions,
    template: {
      compilerOptions: {
        isCustomElement: () => true,
      }
    }
  }
})
