// src/App.js
import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './index.css';

function App() {
  return (
    <div style={{ margin: '50px auto', maxWidth: '600px', textAlign: 'center' }}>
      <h1>✅ To-Do List with React & Redux</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;