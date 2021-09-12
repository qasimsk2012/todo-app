import React from "react";

class DisplayTasks extends React.Component {
  render() {
    return (
      <div id="display-tasks">
        {this.props.tasks.map((task) => {
          return <div className="task">{task.value}</div>;
        })}
      </div>
    );
  }
}

export default DisplayTasks;
