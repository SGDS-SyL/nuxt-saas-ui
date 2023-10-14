<script lang="ts" setup>
import { MoonIcon, SunIcon } from 'lucide-vue-next'

const colorMode = useColorMode()

function toggleColorMode() {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <ColorScheme tag="span">
    <Button variant="outline" size="icon" @click.prevent="toggleColorMode">
      <SunIcon class="h-5 w-h rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon class="absolute h-5 w-h rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle color mode</span>
    </Button>
  </ColorScheme>
</template>
