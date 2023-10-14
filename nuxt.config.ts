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
  typescript: {
    typeCheck: true,
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
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
  colorMode: {
    fallback: 'dark',
    classSuffix: '',
  },
})
