import React, { useEffect, useState } from 'react'
import TodoForm from './TodoForm'
import TodoHeader from './TodoHeader'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'
import "./Todo.css"

const Todo = () => {

  const [task, setTask] = useState([])

  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return;
    if (task.includes(inputValue)) return;
    setTask((prevTask) => [...prevTask, inputValue])
  }

  // Functionality for deleting task 

  const handleDeleteTask = (value) => {
    console.log(task)
    console.log(value)
    const updatedTask = task.filter((currTask) => currTask !== value)
    setTask(updatedTask)
  }

  // Functionality for clear All button
  const handleClearTodoData = () => {
    setTask([])
  }

  return (
    <section className="todo-container">
      <header>
        <TodoHeader />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className='myUnOrderList'>
        <ul >
          {
            task.map((currTask, index) => {
              return (
                <TodoList
                  key={index}
                  data={currTask}
                  onHandleDeleteTodo={handleDeleteTask}
                />
              )
            })
          }
        </ul>
      </section>
      <section className='clear-btn' onClick={handleClearTodoData} >Clear All</section>
    </section>
  )
}

export default Todo