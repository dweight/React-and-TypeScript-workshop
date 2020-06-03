import { createContext } from 'react'

export const langs/** Add a type */ = [
  { lang: 'en', text: 'Add task' },
  { lang: 'pl', text: 'Dodaj zadanie' },
  { lang: 'de', text: 'Aufgabe hinzufügen' }
]

export const LanguageContext = createContext/** Add a generic here */(null)

export const LanguageProvider = LanguageContext.Provider

