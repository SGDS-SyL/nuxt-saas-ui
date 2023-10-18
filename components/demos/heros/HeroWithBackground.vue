<script setup lang="ts">
import { ArrowRightIcon } from 'lucide-vue-next'
</script>

<template>
  <section class="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04')] bg-gray-700 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24">
      <!-- Alert -->
      <NuxtLink
        to="/"
        class="mb-7 inline-flex items-center justify-between rounded-full bg-gray-800 hover:bg-gray-900 p-1 pl-1.5 pr-4 text-sm text-white text-left"
      >
        <Badge class="mr-3">
          News
        </Badge>
        We have launched in Product Hunt 🚀
      </NuxtLink>

      <!-- Title -->
      <h1 class="mx-auto mb-4 max-w-5xl text-4xl font-extrabold tracking-tight lg:text-6xl text-white">
        Speed Up Your SaaS Launch with Free NuxtJS Starter Kit
      </h1>

      <!-- Content -->
      <p class="mx-auto mb-8 max-w-xl text-lg text-white lg:text-xl">
        Save time, resources, and get your business off the ground swiftly and cost-effectively
      </p>

      <!-- Buttons -->
      <div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button to="#" size="lg">
          Get Started <ArrowRightIcon class="ml-2 w-5 h-5" />
        </Button>
        <Button to="#" variant="outline" size="lg">
          View Docs
        </Button>
      </div>
    </div>
  </section>
</template>
