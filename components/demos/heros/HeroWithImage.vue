<script setup lang="ts">
import { ArrowRightIcon, StarIcon } from 'lucide-vue-next'
</script>

<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <!-- Alert -->
        <NuxtLink
          to="/"
          class="mb-7 inline-flex items-center justify-between rounded-full bg-muted hover:bg-muted/80 p-1 pl-1.5 pr-4 text-sm text-foreground text-left"
        >
          <Badge class="mr-3">
            News
          </Badge>
          We have launched in Product Hunt 🚀
        </NuxtLink>

        <!-- Title -->
        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight lg:text-6xl">
          Speed Up Your SaaS Launch with Free NuxtJS Starter Kit
        </h1>

        <!-- Content -->
        <p class="max-w-xl mb-6 text-lg text-foreground/80 lg:text-xl">
          Save time, resources, and get your business off the ground swiftly and cost-effectively
        </p>

        <!-- Buttons -->
        <Button to="#" size="lg">
          Get Started <ArrowRightIcon class="ml-2 w-4 h-4" />
        </Button>
        <Button to="#" variant="outline" size="lg" class="ml-3">
          View Docs
        </Button>

        <!-- Avatars with Ratings -->
        <div class="flex justify-start gap-3 lg:gap-5 items-center mt-6">
          <!-- Avatars -->
          <div class="flex">
            <Avatar class="border-background border w-8 h-8 lg:w-10 lg:h-10">
              <AvatarImage src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04" alt="Avatar 1" />
            </Avatar>
            <Avatar class="border-background border w-8 h-8 lg:w-10 lg:h-10 -ml-3">
              <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb" alt="Avatar 2" />
            </Avatar>
            <Avatar class="border-background border w-8 h-8 lg:w-10 lg:h-10 -ml-3">
              <AvatarImage src="https://images.unsplash.com/photo-1542327897-d73f4005b533" alt="Avatar 3" />
            </Avatar>
            <Avatar class="border-background border w-8 h-8 lg:w-10 lg:h-10 -ml-3">
              <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" alt="Avatar 4" />
            </Avatar>
          </div>

          <div class="w-px h-8 bg-gray-300" />

          <!-- Ratings -->
          <div>
            <div class="flex gap-3 items-center">
              <div class="flex gap-1">
                <StarIcon class="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <StarIcon class="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <StarIcon class="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <StarIcon class="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <StarIcon class="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </div>
              <span class="text-foreground/70">5.0</span>
            </div>
            <p class="text-foreground/70 text-sm mt-0.5">
              Voted No.1 by over <strong>2.5k</strong> people
            </p>
          </div>
        </div>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup">
      </div>
    </div>
  </section>
</template>
