import React, { Component } from "react";
import store from "./store";
import "./App.css";
import { observer } from "mobx-react";
import TodoEntry from "./components/TodoEntry";
import TodoItems from "./components/TodoItems";
import TodoFooter from './components/TodoFooter'

@observer
class App extends Component {
  render() {
    return (
      <div className="todoapp" id="todoapp">
        <TodoEntry />
        <TodoItems />
        <TodoFooter />
       
      </div>
    );
  }
}

export default App;
