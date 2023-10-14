import { cva } from 'class-variance-authority'

export { default as NavigationMenu } from './NavigationMenu.vue'
export { default as NavigationMenuList } from './NavigationMenuList.vue'
export { default as NavigationMenuItem } from './NavigationMenuItem.vue'
export { default as NavigationMenuTrigger } from './NavigationMenuTrigger.vue'
export { default as NavigationMenuContent } from './NavigationMenuContent.vue'
export { default as NavigationMenuLink } from './NavigationMenuLink.vue'

export const navigationMenuTriggerStyle = cva(
  'group p-3 border-b w-full inline-flex items-center justify-between lg:p-0 lg:border-0 lg:justify-center lg:rounded-md text-sm font-medium transition-colors hover:text-foreground/100 text-foreground/80 focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:font-semibold',
)
