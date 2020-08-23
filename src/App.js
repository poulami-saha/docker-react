import React from "react";
import logo from "./logo.svg";
import SignUp from "./signUp";
import "./App.css";
import TodoList from "./Todolist";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
    };
  }
  addTodo = (todo) => {
    let newList = this.state.todoList;
    newList.push(todo);
    this.setState({ todoList: newList });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.addTodo(this.state.todo);
    this.setState({ todo: "" });
  };
  render() {
    return (
      <div className="App">
        <SignUp addTodo={this.addTodo} />

        <TodoList todos={this.state.todoList} />
      </div>
    );
  }
}

export default App;
