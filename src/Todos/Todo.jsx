import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import "./Todo.css";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) return;

    if (task.includes(inputValue)) {
      return;
    }

    setTask((prevTask) => [...prevTask, inputValue]);
    setInputValue("");
  };

  const handleTaskDelete = (taskToDelete) => {
    setTask(task.filter((currTask) => currTask !== taskToDelete));
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
      </header>
      <TodoForm
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
      <TodoList task={task} handleTaskDelete={handleTaskDelete} />
    </section>
  );
};

export default Todo;
