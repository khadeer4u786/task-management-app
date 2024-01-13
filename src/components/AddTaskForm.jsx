// src/components/AddTaskForm.js

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './AddTaskForm.css'

const AddTaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState({ title: '', description: '', dueDate: new Date(), status: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleDateChange = (date) => {
    setNewTask({ ...newTask, dueDate: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(newTask);
    setNewTask({ title: '', description: '', dueDate: new Date(), status: '' });
  };

  return (
    <div className='main-content'>
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input className='tsk-input' type="text" name="title" value={newTask.title} onChange={handleInputChange} required />

        <label>Description:</label>
        <input className='tsk-input' type="text" name="description" value={newTask.description} onChange={handleInputChange} required />
        
        <label>Due Date:</label>
        <DatePicker
          showIcon
          selected={newTask.dueDate}
          onChange={handleDateChange}
          dateFormat="MM/dd/yyyy"
          className="date-picker"
        />

        <label style={{marginTop:"15px"}}>Status:</label>
        <input className='tsk-input' type="text" name="status" value={newTask.status} onChange={handleInputChange} required />

        <button className='submit-btn' type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskForm;
