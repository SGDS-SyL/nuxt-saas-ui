<script lang="ts" setup>
import type { ILogo } from '~/types/logo'

const { sgds } = useAppConfig()
const logo: string | ILogo = sgds.logo

let link: string = '/'
let classes: string = 'h-10'
let darkSrc: string = typeof logo === 'object' ? '' : logo
let lightSrc: string = typeof logo === 'object' ? '' : logo

if (typeof logo === 'object') {
  link = logo.link ?? link
  classes = logo.class ?? classes
  darkSrc = typeof logo.image === 'object' ? (logo.image.dark ?? logo.image.light) : logo.image
  lightSrc = typeof logo.image === 'object' ? (logo.image.light ?? logo.image.dark) : logo.image
}
</script>

<template>
  <NuxtLink :to="link" class="flex items-center gap-x-2">
    <img
      :src="darkSrc"
      class="hidden dark:block"
      :class="classes"
      :alt="sgds.title"
    >
    <img
      :src="lightSrc"
      class="dark:hidden"
      :class="classes"
      :alt="sgds.title"
    >
    <span v-if="logo.title" class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
      {{ logo.title }}
    </span>
  </NuxtLink>
</template>
