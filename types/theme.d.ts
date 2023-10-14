const themes = ['light', 'dark'] as const

export interface ITheme {
  font?: string
  background?: {
    primary?: string
    light?: string
    dark?: string
  }
  foreground?: {
    primary?: string
    light?: string
    dark?: string
  }
  force?: typeof themes[number]
}
