import React, { FC, useState, ChangeEvent, FormEvent, useContext } from 'react'
import { LanguageContext } from './LanguageContext'

interface TodoFormProps {
  submit: AddTodo
}

export const TodoForm: FC<TodoFormProps> = ({ submit }) => {
  const [newTodo, setNewTodo] = useState('')
  const lang = useContext(LanguageContext)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.currentTarget.value);
  }

  const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    submit(newTodo)
    setNewTodo('')
  }

  return (
    <form>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>{lang!.text}</button>
    </form>
  )
}
