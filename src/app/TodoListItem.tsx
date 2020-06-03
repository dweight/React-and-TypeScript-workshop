import React from 'react'

export const TodoListItem/** Add generic here */ = ({ todo, toggleComplete }) => {
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
