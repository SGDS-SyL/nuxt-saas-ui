<script lang="ts" setup>
import type { INavigationItem } from '~/types/navigation'
import { navigationMenuTriggerStyle } from '~/components/ui/navigation-menu'

defineProps<{
  menu?: INavigationItem[]
}>()

const route = useRoute()
function checkIsActive(item: INavigationItem): boolean {
  if (item.submenu)
    return item.submenu.some(el => el.link === route.path)

  return route.path === item.link
}
function onNavChange() {
  setTimeout(() => {
    const triggers = document.querySelectorAll('.submenu-trigger[data-state="open"]')
    if (triggers.length === 0)
      return

    const firstTrigger = triggers[0] as HTMLElement
    const viewports = document.getElementsByClassName('submenu-viewport')

    if (viewports.length > 0) {
      const viewport = viewports[0] as HTMLElement
      viewport.style.left = `${firstTrigger.offsetLeft}px`
    }
  })
}
</script>

<template>
  <NavigationMenu id="mobile-menu" @update:model-value="onNavChange">
    <NavigationMenuList>
      <template v-if="menu">
        <NavigationMenuItem v-for="item in menu" :key="item.title">
          <template v-if="item.submenu">
            <NavigationSub :menu="item" />
          </template>
          <NavigationMenuLink v-else as-child>
            <NuxtLink
              :to="item.link"
              :class="[navigationMenuTriggerStyle(), item.class, checkIsActive(item) ? 'font-semibold text-foreground' : '']"
            >
              {{ item.title }}
            </NuxtLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </template>

      <slot />
    </NavigationMenuList>
  </NavigationMenu>
</template>
