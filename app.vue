<script setup lang="ts">
const { sgds } = useAppConfig()

useHead({
  titleTemplate: `%s | ${sgds.title}`,
})
</script>

<template>
  <div>
    <Header1 />
  </div>
</template>
