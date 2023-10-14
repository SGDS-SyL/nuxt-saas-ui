import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://rsms.me/inter/inter.css',
        },
      ],
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxtjs/color-mode'],
  alias: {
    '@core': resolve('./'),
  },
  css: ['@core/assets/css/tailwind.css'],
  components: [
    {
      path: '@core/components',
      extensions: ['.vue'],
      pathPrefix: false,
    },
  ],
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
    ],
    lazy: true,
    langDir: './lang',
  },
  colorMode: {
    fallback: 'dark',
    classSuffix: '',
  },
})
