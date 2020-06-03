import React, { useState } from 'react'
import { TodoListItem } from './TodoListItem'
import { TodoList } from './TodoList'
import { TodoForm } from './TodoForm'
import { LanguagePicker } from './LanguagePicker'
import { LanguageProvider, langs } from './LanguageContext'

const dummyTodos /** Add a type */ = [
  { text: 'Learn TS', complete: true },
  { text: 'Stay alive', complete: false }
]

const App /** We need a generic here! */ = () => {
  const [todos, setTodos] = useState/** We need a generic here! */(dummyTodos)
  const [language, setLanguage] = useState/** We need a generic here! */(langs[0])

  const toggleComplete/** Add a type */ = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const addTodo/** Add a type */ = newTodo => {
    newTodo.trim() !== '' && setTodos([...todos, { text: newTodo, complete: false }])
  }

  const handleLanguageChange/** Add a type */ = (language) => {
    const selectedLanguage = langs.find(lang => {
      return lang.lang === language
    })

    setLanguage({ lang: selectedLanguage!.lang, text: selectedLanguage!.text })
  }

  return (
    <LanguageProvider value={language}>
      <LanguagePicker langs={langs} onLanguageChange={handleLanguageChange} />
      <TodoForm submit={addTodo} />
      <TodoList>
        {todos.map(todo => <TodoListItem key={todo.text} todo={todo} toggleComplete={toggleComplete} />)}
      </TodoList>
    </LanguageProvider>
  )
}

export default App
