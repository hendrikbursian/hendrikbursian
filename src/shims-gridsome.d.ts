import VueI18n, { IVueI18n } from 'vue-i18n'
import { Query } from './types/Gridsome.gql'

declare module 'vue/types/vue' {
  interface Vue {
    $static: Query
    $page: Query
    readonly $i18n: VueI18n & IVueI18n
    $tp: (
      pathToResolve: string,
      targetLocale?: string,
      forceChange?: boolean
    ) => string
  }
}
