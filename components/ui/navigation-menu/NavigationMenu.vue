<script setup lang="ts">
import {
  NavigationMenuRoot,
  type NavigationMenuRootEmits,
  type NavigationMenuRootProps,
} from 'radix-vue'
import NavigationMenuViewport from './NavigationMenuViewport.vue'
import { cn } from '@/lib/utils'

const props = defineProps<NavigationMenuRootProps & { class?: string }>()

const emits = defineEmits<NavigationMenuRootEmits>()
</script>

<template>
  <NavigationMenuRoot
    v-bind="props"
    :class="cn('relative z-10 w-full lg:w-auto lg:order-1 mt-4 lg:mt-0 lg:flex hidden', props.class)"
    @update:model-value="emits('update:modelValue', $event)"
  >
    <slot />
    <NavigationMenuViewport />
  </NavigationMenuRoot>
</template>
