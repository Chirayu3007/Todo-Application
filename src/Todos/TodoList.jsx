import React from 'react';
import { MdCheck, MdDeleteForever } from "react-icons/md";

const TodoList = ({ key, data, onHandleDeleteTodo }) => {
  return (
    <li key={key} className="todo-item" >
      <span>{data}</span>
      <button className='check-btn'><MdCheck /></button>
      <button className='delete-btn' onClick={() => onHandleDeleteTodo(data)}><MdDeleteForever /></button>
    </li>
  )
}

export default TodoList;






// const TodoList = ({ task, handleTaskDelete }) => {
//   return (
//     <section className='myUnOrderList'>
//       <ul>
//         {task.map((currTask, index) => (
//           <li key={index} className="todo-item">
//             <span>{currTask}</span>
//             <button className='check-btn'>
//               <MdCheck />
//             </button>
//             <button className='delete-btn' onClick={() => handleTaskDelete(currTask)}>
//               <MdDeleteForever />
//             </button>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };