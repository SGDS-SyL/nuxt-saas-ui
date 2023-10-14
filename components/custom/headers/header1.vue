<script lang="ts" setup>
import type { INavigationItem } from '~/types/navigation'

const nav: INavigationItem[] = [{
  title: 'Documentation',
  submenu: [{
    title: 'Test Child 1',
    link: '/',
  }, {
    title: 'Test Child 2',
    link: '/test2',
  }],
}, {
  title: 'Components',
  class: 'w-[300px] md:w-[500px] md:grid-cols-2 lg:w-[600px]',
  submenu: [{
    title: 'Test Child 1',
    description: 'A modal dialog that interrupts the user with important content and expects a response.',
    link: '/test',
  }, {
    title: 'Test Child 2',
    description: 'A modal dialog that interrupts the user with important content and expects a response.',
    link: '/test2',
  }, {
    title: 'Test Child 3',
    description: 'A modal dialog that interrupts the user with important content and expects a response.',
    link: '/test3',
  }, {
    title: 'Test Child 4',
    description: 'A modal dialog that interrupts the user with important content and expects a response.',
    link: '/test4',
  }],
}, {
  title: 'Themes',
  link: '/',
}]
</script>

<template>
  <header>
    <div class="bg-background lg:border-b p-4 lg:px-6">
      <div class="flex flex-wrap items-center mx-auto max-w-screen-xl">
        <Logo />

        <div class="flex flex-1 items-center justify-end space-x-2 lg:space-x-4 lg:order-2">
          <slot name="cta">
            <DarkModeToggle />
          </slot>

          <MobileMenuBtn />
        </div>

        <Navigation :nav="nav" class="lg:ml-6" />
      </div>
    </div>
  </header>
</template>
