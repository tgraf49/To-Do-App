import React from 'react';

const TodoItem = ({ task, completed, onRemove, onToggleCompletion }) => {
  return (
    <li>
      <input type="checkbox" checked={completed} onChange={onToggleCompletion} />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>{task}</span>
      <button onClick={onRemove}>Remove</button>
    </li>
  );
};

export default TodoItem;