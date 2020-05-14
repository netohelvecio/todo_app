import { observable, action, computed, reaction } from 'mobx';

interface Todo {
  task: string,
  isComplete: boolean,
}

export class TodoStore {
  constructor() {
    reaction(
      () => this.todoList.filter(todo => !todo.isComplete),
      incompletedTasks => {
        if (incompletedTasks.length > 5) {
          alert('Pare de procastinar e faça as tarefas!!!')
        }
      }
    );
  }

  private populetedLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todoList));
  }

  @observable 
  public todoList: Todo[] = JSON.parse(localStorage.getItem('todos')!)|| [];

  @computed
  get totalTaksIncompleted() {
    return this.todoList.filter(task => !task.isComplete).length;
  }

  @action
  addTodo(task: string) {
    this.todoList.push({ task, isComplete: false });
    this.populetedLocalStorage();
  }

  @action
  deleteTodo(index: number) {
    this.todoList.splice(index, 1);
    this.populetedLocalStorage();
  }

  @action
  checkTodo(index: number) {
    this.todoList[index].isComplete = true;
    this.populetedLocalStorage();
  }
}