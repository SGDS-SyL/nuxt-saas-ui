<script lang="ts" setup>
import type { INavigationItem } from '~/types/navigation'

const nav: INavigationItem[] = [{
  title: 'Test',
  link: '/test',
  submenu: [{
    title: 'Test Child 1',
    link: '/test',
  }, {
    title: 'Test Child 2',
    link: '/test2',
  }],
}, {
  title: 'Test 2',
  link: '/test2',
  class: 'w-[300px] md:w-[500px] md:grid-cols-2 lg:w-[600px]',
  submenu: [{
    title: 'Test Child 12',
    description: 'A modal dialog that interrupts the user with important content and expects a response.',
    link: '/test',
  }, {
    title: 'Test Child 23',
    description: 'A modal dialog that interrupts the user with important content and expects a response.',
    link: '/test2',
  }, {
    title: 'Test Child 12',
    description: 'A modal dialog that interrupts the user with important content and expects a response.',
    link: '/test',
  }, {
    title: 'Test Child 23',
    description: 'A modal dialog that interrupts the user with important content and expects a response.',
    link: '/test2',
  }],
}, {
  title: 'Test 3',
  link: '/test3',
}]
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <slot />

      <NavigationMenuItem v-for="item in nav" :key="item.title">
        <template v-if="item.submenu">
          <NavigationMenuTrigger>{{ item.title }}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid gap-2 p-2.5" :class="item.class ?? 'w-[200px]'">
              <li v-for="child in item.submenu" :key="child.title">
                <NavigationMenuLink as-child>
                  <NuxtLink
                    :to="item.link"
                    class="block select-none space-y-1 rounded-md p-2.5 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div class="text-sm font-medium leading-none whitespace-nowrap">
                      {{ child.title }}
                    </div>
                    <p v-if="child.description" class="text-sm leading-snug text-muted-foreground mt-1">
                      {{ child.description }}
                    </p>
                  </NuxtLink>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </template>
        <NavigationMenuLink v-else as-child>
          <NuxtLink :to="item.link" class="inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
            {{ item.title }}
          </NuxtLink>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
