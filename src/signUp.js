import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      day: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ task: "", day: "" });
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <h2>Hey There</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
            required
          />
          <label>Task</label>

          <input
            type="text"
            name="day"
            value={this.state.day}
            onChange={this.handleChange}
            required
          />
          <label>Day</label>

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
