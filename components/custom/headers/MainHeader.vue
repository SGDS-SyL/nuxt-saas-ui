<script lang="ts" setup>
import type { INavigationItem } from '~/types/navigation'
import type { ITheme } from '~/types/theme'

defineProps<{
  menu: INavigationItem[]
  centeredLogo?: boolean
  sticky?: boolean
}>()

const { sgds } = useAppConfig()
const theme: ITheme = sgds.theme
const hideThemeModeToggle: boolean = theme.force !== undefined
</script>

<template>
  <header :class="sticky ? 'sticky w-full top-0 left-0 border-b' : ''">
    <div class="bg-background p-4 lg:px-6">
      <div class="flex flex-wrap items-center mx-auto max-w-screen-xl" :class="{ 'grid grid-cols-3': centeredLogo }">
        <Logo :class="{ 'lg:order-2 lg:justify-center': centeredLogo }" />

        <div
          class="flex flex-1 items-center justify-end space-x-2 lg:space-x-4 lg:order-2"
          :class="{ 'col-span-2 row-span-2 lg:col-span-1 lg:row-span-1': centeredLogo }"
        >
          <slot name="cta">
            <ThemeModeToggle v-if="!hideThemeModeToggle" />
          </slot>

          <MobileMenuBtn />
        </div>

        <Navigation :menu="menu" :class="centeredLogo ? 'col-span-3 row-span-3 lg:col-span-1 lg:row-span-1' : 'lg:ml-6'">
          <slot />
        </Navigation>
      </div>
    </div>
  </header>
</template>
