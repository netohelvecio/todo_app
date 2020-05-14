import React from 'react';
import { Provider } from 'mobx-react'

import { TodoStore } from './store/todo';

import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';

const App = () => {
  const todoStore: TodoStore = new TodoStore();

  return (
    <Provider todoStore={todoStore}>
      <TodoAdd />
      <TodoList />
    </Provider>
  );
}

export default App;
