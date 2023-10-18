import convert from 'color-convert'

export function useHexToHsl(hex: string): string | null {
  if (!/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex))
    return null

  hex = hex.replace('#', '')
  const hexToRgb = convert.hex.rgb(hex)
  const rgbToHls = convert.rgb.hsl(hexToRgb)

  return `${rgbToHls[0]}deg ${rgbToHls[1]}% ${rgbToHls[2]}%`
}
