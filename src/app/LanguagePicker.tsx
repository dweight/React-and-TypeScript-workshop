import React from 'react'

// We need to declare an interface for props here

export const LanguagePicker /** Add a generic with props here */ = ({ langs, onLanguageChange }) => {
  return (
    <select onChange={(event/** Add generic here */) => onLanguageChange(event.currentTarget.value)}>
      {langs.map((lang) => <option key={lang.lang} value={lang.lang}>{lang.lang}</option>)}
    </select>
  )
}
