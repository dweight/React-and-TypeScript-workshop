import React, { FC } from 'react'

interface TodoListItemProps {
  todo: Todo
  toggleComplete: ToggleComplete
}

export const TodoListItem: FC<TodoListItemProps> = ({ todo, toggleComplete }) => {
  return <li>
    <label style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={() => toggleComplete(todo)} />
      {todo.text}
    </label>
  </li>
}
