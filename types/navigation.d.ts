import type { Icon } from 'lucide-vue-next'

export interface INavigationItem {
  title: string
  icon?: Icon
  link?: string
  description?: string
  submenu?: INavigation[]
  class?: string
}
