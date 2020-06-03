type Todo = {
  text: string,
  complete: boolean
}

type Lang = {
  lang: string,
  text: string
}

type ToggleComplete = (selectedTodo: Todo) => void

type AddTodo = (newTodo: string) => void

type HandleLanguageChange = (language: string) => void
