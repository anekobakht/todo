import { observable, action } from "mobx";
import TodoStore from "./TodoStore";

class TodoModel {
  store;
  id;
  @observable title;
  @observable completed;
  @observable count;

  constructor(store, title, completed, id) {
    this.title = title;
    this.completed = completed;
    this.id = id;
    this.store = store;
  }

  @action
  toggle() {
    this.completed = !this.completed;
    if (this.completed === true) {
      TodoStore.countActive = TodoStore.countActive - 1;
    } else {
      TodoStore.countActive = TodoStore.countActive + 1;
    }
  }

  @action
  remove() {
    if(this.completed!==true){
      TodoStore.countActive = TodoStore.countActive - 1;
    }
    const actives = TodoStore.todos.filter((todo) => todo.id !== this.id);
    TodoStore.todos = actives;
    
  }
}

export default TodoModel;
