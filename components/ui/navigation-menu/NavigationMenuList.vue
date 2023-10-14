<script setup lang="ts">
import { NavigationMenuList, type NavigationMenuListProps } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<NavigationMenuListProps & { class?: string }>()
</script>

<template>
  <NavigationMenuList
    v-bind="props"
    :class="
      cn(
        'group flex flex-col lg:flex-row list-none lg:items-center lg:space-x-6',
        props.class,
      )
    "
  >
    <slot />
  </NavigationMenuList>
</template>
