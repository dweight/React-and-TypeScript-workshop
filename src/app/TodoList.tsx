import React, { FC, ReactNode } from 'react'

export const TodoList: FC<ReactNode> = ({ children }) => {
  return (
    <ul>
      {children}
    </ul>
  )
}
