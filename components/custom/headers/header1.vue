<template>
  <header class="flex flex-row items-center container mx-auto py-3">
    <div class="flex items-center gap-4 lg:gap-8">
      <Logo />
      <Navigation />
    </div>
    <div class="flex flex-1 items-center justify-end gap-4">
      <DarkModeToggle />

      <div class="flex gap-3">
        <Button round variant="ghost" href="#">
          <span>Sign In</span>
        </Button>

        <Button round variant="secondary" href="#">
          <span class="flex" items-center space-x-2>
            <span>Sign Up</span>
          </span>
        </Button>
      </div>
    </div>
  </header>
</template>
