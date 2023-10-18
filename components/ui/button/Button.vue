<script setup lang="ts">
import { buttonVariants } from '.'
import type { ILink } from '~/types/link'
import { cn } from '@/lib/utils'

interface Props {
  variant?: NonNullable<Parameters<typeof buttonVariants>[0]>['variant']
  size?: NonNullable<Parameters<typeof buttonVariants>[0]>['size']
  as?: string
  link?: ILink
}

withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<template>
  <component
    :is="as"
    :class="cn(buttonVariants({ variant, size }), $attrs.class ?? '')"
  >
    <NuxtLink v-if="link" :to="link.link" :target="link.target">
      <slot />
    </NuxtLink>
    <slot v-else />
  </component>
</template>
