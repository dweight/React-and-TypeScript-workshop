import { createContext } from 'react'

export const langs: Lang[] = [
  { lang: 'en', text: 'Add task' },
  { lang: 'pl', text: 'Dodaj zadanie' },
  { lang: 'de', text: 'Aufgabe hinzufügen' }
]

export const LanguageContext = createContext<Lang | null>(null)

export const LanguageProvider = LanguageContext.Provider

