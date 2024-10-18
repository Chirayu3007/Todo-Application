import React from 'react';
import { MdCheck, MdDeleteForever } from "react-icons/md";

const TodoList = ({ task, handleTaskDelete }) => {
  return (
    <section className='myUnOrderList'>
      <ul>
        {task.map((currTask, index) => (
          <li key={index} className="todo-item">
            <span>{currTask}</span>
            <button className='check-btn'>
              <MdCheck />
            </button>
            <button className='delete-btn' onClick={() => handleTaskDelete(currTask)}>
              <MdDeleteForever />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
