import React, { Component } from "react";
import DisplayTasks from "./displayTasks";

class GetTask extends Component {
  state = {
    tasks:
      JSON.parse(localStorage.getItem("tasks")) === null
        ? []
        : JSON.parse(localStorage.getItem("tasks")),
  };

  addTask = () => {
    const value = document.getElementById("get-task").value;
    const tasks = this.state.tasks;

    if (tasks.find((t) => t.value === value) === undefined || value !== "")
      tasks.push({ value });
    else alert("The task is already assigned!");
    this.setState({ tasks });
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.addTask();
    }
  };

  render() {
    return (
      <React.Fragment>
        <div id="task-input">
          <input
            type="text"
            name="tasks"
            id="get-task"
            placeHolder="Enter task"
            onKeyPress={this.handleKeyPress}
          />
          <button type="submit" id="add" onClick={() => this.addTask()}>
            +
          </button>
        </div>
        <DisplayTasks tasks={this.state.tasks} />
      </React.Fragment>
    );
  }
}

export default GetTask;
