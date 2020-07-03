import React, { Component } from "react";
import { observable, action } from "mobx";
import TodoModel from "./TodoModel";

class TodoStore {
  @observable todos = [];
  lastID = 0;
  @observable countActive = 0;
  @observable FilterKind = `all`;

  @action
  addTodo(title) {
    this.todos.push(new TodoModel(this, title, false, this.lastID++));
    this.countActive = this.countActive + 1;
  }

  @action
  filterComplete() {
    this.FilterKind = `completed`;
  }

  @action
  clearCompleted() {
    const actives = this.todos.filter((todo) => todo.completed === false);
    this.todos = actives;
  }

  @action
  filterUnComplete() {
    this.FilterKind = `active`;
  }

  @action
  filterAll() {
    this.FilterKind = `all`;
  }
}

const store = new TodoStore();
export default store;
