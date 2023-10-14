import type { IImage } from './image'

export interface ILogo {
  image: string | IImage
  link?: string
  title?: string
  class?: string
}
