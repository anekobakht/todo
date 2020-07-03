import React, { Component } from "react";
import TodoStore from "../stores/TodoStore";
import { observer } from "mobx-react";
import TodoItem from "./TodoItem";
import TodoModel from "../stores/TodoModel";
import TodoItems from "./TodoItems";

@observer
class TodoFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btn1: "selected",
      btn2: "",
      btn3: "",
    };
  }

  onChangeButton(kind) {
    if (kind === "btn1") {
      this.setState({
        btn1: "selected",
        btn2: "",
        btn3: "",
      });
      TodoStore.filterAll();
    }
    if (kind === "btn2") {
      this.setState({
        btn1: "",
        btn2: "selected",
        btn3: "",
      });
      TodoStore.filterUnComplete();
    }

    if (kind === "btn3") {
      this.setState({
        btn1: "",
        btn2: "",
        btn3: "selected",
      });

      TodoStore.filterComplete();
    }
  }

  clearCompleted() {
    TodoStore.clearCompleted();
  }

  render() {
    const { count } = this.props;

    return (
      <footer class="footer">
        <span class="todo-count">
          <strong>{TodoStore.countActive}</strong> item left
        </span>
        <ul class="filters">
          <li>
            <a
              class={this.state.btn1}
              onClick={() => this.onChangeButton("btn1")}
              href="#/"
            >
              All
            </a>
          </li>
          <li>
            <a
              id="active"
              href="#/active"
              onClick={() => this.onChangeButton("btn2")}
              class={this.state.btn2}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => this.onChangeButton("btn3")}
              class={this.state.btn3}
            >
              Completed
            </a>
          </li>
        </ul>
        <button class="clear-completed" onClick={() => this.clearCompleted()}>
          Clear completed
        </button>
      </footer>
    );
  }
}

export default TodoFooter;
