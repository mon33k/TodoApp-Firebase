import React from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>Todo</h1>
      <Form/>
      <TodoList />
    </div>
  );
}

export default App;
