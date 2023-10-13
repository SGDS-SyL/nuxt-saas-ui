import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { createResolver, defineNuxtModule } from '@nuxt/kit'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    join(currentDir, './assets/css/tailwind.css'),
  ],
  components: [
    {
      path: join(currentDir, './components'),
      extensions: ['.vue'],
    },
    {
      path: join(currentDir, './components/ui'),
      extensions: ['.vue'],
      prefix: 'Ui',
    },
  ],
})
