import React from 'react'
import TodoFrom from './TodoFrom'
import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

const Todo = () => {
  return (
    <div>
      <TodoFrom/>
      <TodoHeader/>
      <TodoList/>
      <TodoFooter/>
    </div>
  )
}

export default Todo
