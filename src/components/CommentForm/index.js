import React, { Component, PureComponent } from "react";

import "./style.css";

class CommentForm extends PureComponent {
  state = {
    user: "",
    text: ""
  };

  render() {
    return (
      <form onSubit={this.handleSubmit}>
        user:{" "}
        <input
          value={this.state.user}
          onChange={this.handleChange("user")}
          className={this.getClassName("user")}
        />
        comment:{" "}
        <input
          value={this.state.user}
          onChange={this.handleChange("text")}
          className={this.getClassName("text")}
        />
        <input type="submit" value="submit" />
      </form>
    );
  }

  getClassName = type => {
    this.state[type].length && this.state[type].length < limits[type].min
      ? "form-input__error"
      : "";
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.setState({
      user: "",
      text: ""
    });
  };

  handleChange = type => ev => {
    const { value } = ev.target;

    if (value.length > limits[type].max) return;
    this.setState({
      [type]: value
    });
  };
}

const limits = {
  user: {
    min: 5,
    max: 15
  },
  text: {
    min: 20,
    max: 50
  }
};

export default CommentForm;
