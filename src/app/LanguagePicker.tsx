import React, { FC, ChangeEvent } from 'react'

interface LanguagePickerProps {
  langs: Lang[]
  onLanguageChange: HandleLanguageChange
}

export const LanguagePicker: FC<LanguagePickerProps> = ({ langs, onLanguageChange }) => {
  return (
    <select onChange={(event: ChangeEvent<HTMLSelectElement>) => onLanguageChange(event.currentTarget.value)}>
      {langs.map((lang) => <option key={lang.lang} value={lang.lang}>{lang.lang}</option>)}
    </select>
  )
}
