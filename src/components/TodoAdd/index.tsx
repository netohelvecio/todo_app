import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import { MdAdd } from 'react-icons/md';

import { TodoStore } from '../../store/todo';

import './styles.scss';


interface TodoListProps {
  todoStore?: TodoStore;
}

const TodoAddComponent = ({ todoStore }: TodoListProps) => {
  const [task, setTask] = useState('');

  function handleAdd(e: React.FormEvent<HTMLFormElement>) {
    if (task) {
      e.preventDefault();
      todoStore?.addTodo(task);
      setTask('');
    } else {
      alert('Preencha a tarefa!');
    }
  }

  return (
    <div>
      <h2>Adicione uma tarefa</h2>
      <span>{todoStore?.totalTaksIncompleted} tarefas não feitas</span>

      <form onSubmit={handleAdd}>
        <input type="text" value={task} onChange={e => setTask(e.target.value)} />
        <button type="submit"><MdAdd color="#fff" size={26}/></button>
      </form>
    </div>
  );
}

export const TodoAdd = inject('todoStore')(observer(TodoAddComponent));
