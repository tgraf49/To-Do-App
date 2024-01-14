import React, { useState } from 'react';
import './Task.css';

const Task = ({ task, onDelete }) => {
  const [completed, setCompleted] = useState(false);

  const toggleCompletion = () => {
    setCompleted(!completed);
  };

  return (
    <div className={`task ${completed ? 'completed' : ''}`}>
      <span onClick={toggleCompletion} style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {task}
      </span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Task;

