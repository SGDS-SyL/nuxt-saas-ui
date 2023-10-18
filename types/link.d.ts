const targets = ['_self', '_blank'] as const

export interface ILink {
  link: string
  target?: typeof targets[number]
}
