<script lang="ts" setup>
import type { INavigationItem } from '~/types/navigation'

defineProps<{
  menu: INavigationItem
}>()

const route = useRoute()
function checkIsActive(item: INavigationItem): boolean {
  if (item.submenu)
    return item.submenu.some(el => el.link === route.path)

  return route.path === item.link
}
</script>

<template>
  <NavigationMenuTrigger
    class="peer" :class="[checkIsActive(menu) ? 'font-semibold text-foreground' : '']"
  >
    {{ menu.title }}
  </NavigationMenuTrigger>

  <ul
    class="hidden border-b lg:!hidden submenu peer-data-[state=open]:grid"
  >
    <li v-for="(child, cIndex) in menu.submenu" :key="child.title">
      <NavigationMenuLink as-child>
        <NuxtLink
          :to="child.link"
          class="flex gap-x-3 border-border/70 text-sm select-none space-y-1 py-3 px-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          :class="[child.class, cIndex < menu.submenu!.length - 1 ? 'border-b' : '']"
        >
          <component :is="child.icon" v-if="child.icon" class="text-primary/80 w-6" />
          <div class="flex-1">
            <div class="font-medium leading-none whitespace-nowrap">
              {{ child.title }}
            </div>
            <p v-if="child.description" class="leading-snug text-muted-foreground mt-1">
              {{ child.description }}
            </p>
          </div>
        </NuxtLink>
      </NavigationMenuLink>
    </li>
  </ul>

  <NavigationMenuContent>
    <ul class="grid gap-y-2 p-2.5 items-start" :class="menu.class ?? 'w-[200px]'">
      <li v-for="child in menu.submenu" :key="child.title">
        <NavigationMenuLink as-child>
          <NuxtLink
            :to="child.link"
            class="flex gap-x-3 text-sm select-none space-y-1 rounded-md p-2.5 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            :class="[child.class]"
          >
            <component :is="child.icon" v-if="child.icon" class="text-primary/80 w-6" />
            <div class="flex-1">
              <div class="font-medium leading-none whitespace-nowrap">
                {{ child.title }}
              </div>
              <p v-if="child.description" class="leading-snug text-muted-foreground mt-1">
                {{ child.description }}
              </p>
            </div>
          </NuxtLink>
        </NavigationMenuLink>
      </li>
    </ul>
  </NavigationMenuContent>
</template>
