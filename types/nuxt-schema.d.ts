import type { IAppConfig } from './app-config'

declare module 'nuxt/schema' {
  interface AppConfigInput {
    sgds?: IAppConfig
  }
}

export {}
