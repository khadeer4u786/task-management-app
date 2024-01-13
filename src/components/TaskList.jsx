// src/components/TaskList.js

import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks }) => {
  return (
    <div className='task-list'>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id} className="task-item">
              <div className="task-info">
                <div>{task.title}</div>
                <div>{task.description}</div>
                <div className="task-due-date">Due Date: {task.dueDate}</div>
              </div>
              <div className={`task-status ${task.status === 'completed' ? 'task-completed' : ''}`}>
                {task.status}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
