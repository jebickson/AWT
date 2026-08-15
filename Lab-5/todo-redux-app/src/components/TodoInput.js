// src/components/TodoInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

const TodoInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter a task"
        style={{ padding: '8px', marginRight: '10px', width: '250px' }}
      />
      <button onClick={handleAdd} style={{ padding: '8px 16px' }}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;