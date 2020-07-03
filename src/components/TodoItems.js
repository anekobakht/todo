import React, { Component } from "react";
import TodoItem from "./TodoItem";
import TodoStore from "../stores/TodoStore";
import TodoFooter from "../components/TodoFooter";

import { observer } from "mobx-react";

@observer
class TodoItems extends Component {
  filtering() {
    if (TodoStore.FilterKind === `all`) {
      return TodoStore.todos.map((todo) => {
        return <TodoItem todo={todo} />;
      });
    } else if (TodoStore.FilterKind === `active`) {
      return TodoStore.todos
        .filter((todo) => todo.completed === false)
        .map((todo) => {
          return <TodoItem todo={todo} />;
        });
    } else if (TodoStore.FilterKind === `completed`) {
      return TodoStore.todos
        .filter((todo) => todo.completed === true)
        .map((todo) => {
          return <TodoItem todo={todo} />;
        });
    }
  }
  render() {
    return (
      <section className="main">
        <ul className="todo-list">{this.filtering()}</ul>
      </section>
    );
  }
}

export default TodoItems;
