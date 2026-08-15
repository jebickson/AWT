// src/components/TodoList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../redux/actions';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map(todo => (
        <li
          key={todo.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 12px',
            margin: '4px 0',
            border: '1px solid #ddd',
            borderRadius: '4px',
            maxWidth: '400px'
          }}
        >
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              flex: 1
            }}
          >
            {todo.task}
          </span>
          <div>
            <button
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{ marginRight: '8px', padding: '4px 8px' }}
            >
              {todo.completed ? 'Undo' : 'Complete'}
            </button>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              style={{ padding: '4px 8px', background: '#dc3545', color: 'white' }}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;