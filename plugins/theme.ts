import { useHexToHsl } from '~/composables/useHexToHsl'
import type { ITheme } from '~/types/theme'

function addThemeFont(theme: ITheme): string {
  return theme.font ? `--font-sans: '${theme.font}';` : ''
}

function addPrimaryTheme(theme: ITheme): string {
  let style = ''

  if (theme.background?.primary) {
    const primaryBg = useHexToHsl(theme.background.primary) ?? theme.background.primary
    style += `--primary: ${primaryBg};`
  }

  if (theme.foreground?.primary) {
    const primaryFg = useHexToHsl(theme.foreground.primary) ?? theme.foreground.primary
    style += `--primary-foreground: ${primaryFg};`
    style += `--destructive-foreground: ${primaryFg};`
  }

  return style
}

function addLightTheme(theme: ITheme): string {
  let style = ':root:not(.dark){'
  style += addThemeFont(theme)
  style += addPrimaryTheme(theme)

  if (theme.background?.light) {
    const lightBg = useHexToHsl(theme.background.light) ?? theme.background.light
    style += `--background: ${lightBg};`
    style += `--popover: ${lightBg};`
    style += `--card: ${lightBg};`
  }

  if (theme.foreground?.light) {
    const lightFg = useHexToHsl(theme.foreground.light) ?? theme.foreground.light
    style += `--foreground: ${lightFg};`
    style += `--popover-foreground: ${lightFg};`
    style += `--card-foreground: ${lightFg};`
    style += `--ring: ${lightFg};`
  }

  style += '}'
  return style
}

function addDarkTheme(theme: ITheme): string {
  let style = '.dark{'
  style += addThemeFont(theme)

  if (theme.background?.dark) {
    const darkBg = useHexToHsl(theme.background.dark) ?? theme.background.dark
    style += `--background: ${darkBg};`
    style += `--popover: ${darkBg};`
    style += `--card: ${darkBg};`
  }

  if (theme.foreground?.dark) {
    const darkFg = useHexToHsl(theme.foreground.dark) ?? theme.foreground.dark
    style += `--foreground: ${darkFg};`
    style += `--popover-foreground: ${darkFg};`
    style += `--card-foreground: ${darkFg};`
    style += `--ring: ${darkFg};`
    style += `--primary: ${darkFg};`
    style += `--secondary-foreground: ${darkFg};`
    style += `--accent-foreground: ${darkFg};`
    style += `--destructive-foreground: ${darkFg};`
  }

  style += '}'
  return style
}

function forceColorMode(theme: ITheme) {
  if (!theme.force)
    return

  const { $colorMode } = useNuxtApp()
  $colorMode.preference = theme.force
}
export default defineNuxtPlugin((nuxtApp) => {
  const { sgds } = useAppConfig()
  const theme: ITheme | undefined = sgds.theme

  if (!theme)
    return

  let style: string = addLightTheme(theme)
  style += addDarkTheme(theme)

  useHead({
    style: [{ innerHTML: style, tagPosition: 'bodyOpen' }],
  })

  nuxtApp.hook('app:mounted', () => {
    forceColorMode(theme)
  })
})
