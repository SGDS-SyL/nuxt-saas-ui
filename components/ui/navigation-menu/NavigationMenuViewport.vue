<script setup lang="ts">
import {
  NavigationMenuViewport,
  type NavigationMenuViewportProps,
} from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<NavigationMenuViewportProps>()
</script>

<template>
  <div class="absolute top-full lg:flex justify-center hidden">
    <NavigationMenuViewport
      v-bind="props"
      class="submenu-viewport"
      :class="
        cn(
          'origin-top-center relative mt-6 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
          $attrs.class ?? '',
        )
      "
    />
  </div>
</template>
