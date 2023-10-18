<script setup lang="ts">
import { BookIcon, SparklesIcon } from 'lucide-vue-next'
import type { INavigationItem } from './types/navigation'

const { sgds } = useAppConfig()

useHead({
  titleTemplate: (title) => {
    return title ? `${title} -  ${sgds.title}` : `${sgds.title}`
  },
})

const menu: INavigationItem[] = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Components',
    class: 'w-[300px] lg:grid-cols-2 lg:w-[600px]',
    submenu: [
      {
        title: 'Components 1',
        icon: BookIcon,
        description:
          'A modal dialog that interrupts the user with important content and expects a response.',
        link: '/test',
      },
      {
        title: 'Components 2',
        icon: SparklesIcon,
        description:
          'A modal dialog that interrupts the user with important content and expects a response.',
        link: '/test2',
      },
      {
        title: 'Components 3',
        description:
          'A modal dialog that interrupts the user with important content and expects a response.',
        link: '/test3',
      },
      {
        title: 'Components 4',
        description:
          'A modal dialog that interrupts the user with important content and expects a response.',
        link: '/test4',
      },
    ],
  },
  {
    title: 'Pricing',
    link: '/',
  },
  {
    title: 'Docs',
    link: '/',
    submenu: [
      {
        title: 'Test Child 3',
        link: '/test3',
      },
      {
        title: 'Test Child 4',
        link: '/test4',
      },
    ],
  },
]
</script>

<template>
  <div class="min-h-screen">
    <MainHeader :menu="menu" :centered-logo="true">
      <template #cta>
        <ThemeModeToggle />
        <Button href="/sign-in">
          Sign In
        </Button>
      </template>
    </MainHeader>

    <HeroWithImage />
    <HeroDefault />
    <HeroWithBackground />
  </div>
</template>
