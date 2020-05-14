
import React from 'react';
import { observer, inject } from 'mobx-react';
import { MdDelete, MdDone } from 'react-icons/md';

import { TodoStore } from '../../store/todo';

import './styles.scss';

interface TodoListProps {
  todoStore?: TodoStore;
}

const TodoListComponent = ({ todoStore }: TodoListProps) => {
  return(
    <section>
      <ul>
        {todoStore?.todoList.map((todo, idx) => (
          <li key={idx}>
            {todo.task}

            {!todo.isComplete || <span>Tarefa Realizada</span>}

            <div>
              <button type="button" onClick={() => todoStore.checkTodo(idx)}>
                <MdDone color="#60D394" size={22} />
              </button>

              <button type="button" onClick={() => todoStore.deleteTodo(idx)}>
                <MdDelete color="#FF1053" size={22} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
    
  );
}

export const TodoList = inject('todoStore')(observer(TodoListComponent));