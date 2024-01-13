// src/components/TaskList.js

import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks }) => {
  return (
    <div className='task-list'>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title} - {task.description} - {task.dueDate} - {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
