<script setup lang="ts">
const { sgds } = useAppConfig()

useHead({
  titleTemplate: (title) => {
    return title ? `${title} -  ${sgds.title}` : `${sgds.title}`
  },
})
</script>

<template>
  <div class="min-h-screen">
    <Header1>
      <template #cta>
        <DarkModeToggle />
        <Button round href="#">
          <span class="flex" items-center space-x-2>
            <span>Sign Up</span>
          </span>
        </Button>
      </template>
    </Header1>
  </div>
</template>
