import React, { FC, useState } from 'react'
import { TodoListItem } from './TodoListItem'
import { TodoList } from './TodoList'
import { TodoForm } from './TodoForm'
import { LanguagePicker } from './LanguagePicker'
import { LanguageProvider, langs } from './LanguageContext'

const dummyTodos: Todo[] = [
  { text: 'Learn TS', complete: true },
  { text: 'Stay alive', complete: false }
]

const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>(dummyTodos)
  const [language, setLanguage] = useState<Lang>(langs[0])

  const toggleComplete: ToggleComplete = selectedTodo => {
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

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== '' && setTodos([...todos, { text: newTodo, complete: false }])
  }

  const handleLanguageChange: HandleLanguageChange = (language) => {
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
