<script lang="ts" setup>
import { MenuIcon, XIcon } from 'lucide-vue-next'

const props = defineProps<{
  menu?: string
}>()

const isExpanded = ref(false)
function toggleMobileMenu() {
  isExpanded.value = !isExpanded.value
  document.getElementById(props.menu ?? 'mobile-menu')?.classList.toggle('hidden')
}
</script>

<template>
  <Button
    variant="outline"
    size="icon"
    class="lg:hidden"
    :aria-controls="menu ?? 'mobile-menu'"
    :aria-expanded="isExpanded"
    @click="toggleMobileMenu"
  >
    <XIcon
      class="absolute h-5 w-h transition-all"
      :class="[isExpanded ? 'rotate-0 scale-100' : 'rotate-90 scale-0']"
    />
    <MenuIcon
      class="h-5 w-h transition-all"
      :class="[isExpanded ? 'rotate-90 scale-0' : 'rotate-0 scale-100']"
    />

    <span className="sr-only">Open mobile menu</span>
  </Button>
</template>
