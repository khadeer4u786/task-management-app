// src/App.js

import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import './App.css';

const App = () => {
  const dummyTasks = [{
    id: 1,
    title: 'Develop App',
    description: 'Develop a Full Stack Application with React, Spring Boot & MongoDB',
    dueDate: '15-Jan-24',
    status: 'In progress'
  },{
    id: 2,
    title: 'Deploy App',
    description: 'Develop a Full Stack Application with React, Spring Boot & MongoDB',
    dueDate: '17-Jan-24',
    status: 'Open'
  }];

  const [tasks, setTasks] = useState([...dummyTasks]);

  useEffect(() => {
    // Fetch tasks from the backend and set them in state
    // You'll need to replace this with actual API calls
    const fetchTasks = async () => {
      // Fetch tasks from your backend API
      // const response = await fetch('your-api-endpoint/tasks');
      // const data = await response.json();
      // setTasks(data);
    };

    fetchTasks();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const addTask = (newTask) => {
    // Add the new task to the backend and update the state
    // You'll need to replace this with actual API calls
    // setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <h1>Task Management App</h1>
      <TaskList tasks={tasks} />
      <AddTaskForm onAddTask={addTask} />
    </div>
  );
};

export default App;
