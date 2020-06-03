import React, { useState, useContext } from 'react'
import { LanguageContext } from './LanguageContext'

export const TodoForm /** Add generic with props */ = ({ submit }) => {
  const [newTodo, setNewTodo] = useState('')
  const lang = useContext(LanguageContext)

  const handleChange = (event/** Add generic here */) => {
    setNewTodo(event.currentTarget.value);
  }

  const handleSubmit = (event/** Add generic here */) => {
    event.preventDefault()
    submit(newTodo)
    setNewTodo('')
  }

  return (
    <form>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>{lang/** reasure ts that you know what are you doing! */.text}</button>
    </form>
  )
}
