export type Lang = 'es' | 'en'

export type Localized<T = string> = { es: T; en: T }
