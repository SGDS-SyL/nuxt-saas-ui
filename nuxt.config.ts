import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  alias: {
    '@core': resolve('./'),
  },
  css: ['@core/assets/css/tailwind.css'],
  components: [
    {
      path: '@core//components',
      extensions: ['.vue'],
    },
    {
      path: '@core/components/ui',
      extensions: ['.vue'],
      prefix: 'Ui',
    },
  ],
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
    ],
    lazy: true,
    langDir: '@core/lang',
  },
})
