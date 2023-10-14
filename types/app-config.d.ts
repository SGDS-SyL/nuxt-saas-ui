import type { ILogo } from './logo'
import type { ITheme } from './theme'

export interface IAppConfig {
  title: string
  theme?: ITheme
  logo: ILogo | string
}
