<script lang="ts" setup>
import type { INavigationItem } from '~/types/navigation'
import { navigationMenuTriggerStyle } from '~/components/ui/navigation-menu'

defineProps<{
  nav?: INavigationItem[]
}>()

const route = useRoute()
function checkIsActive(item: INavigationItem): boolean {
  if (item.submenu)
    return item.submenu.some(el => el.link === route.path)

  return route.path === item.link
}
</script>

<template>
  <NavigationMenu id="mobile-menu">
    <NavigationMenuList>
      <template v-if="nav">
        <NavigationMenuItem v-for="item in nav" :key="item.title">
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
