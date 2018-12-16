import React, { Component } from "react";

class UserForm extends Component {
  state = {
    userName: ""
  };

  render() {
    return (
      <div>
        Name:{" "}
        <input
          type="text"
          value={this.state.userName}
          onChange={this.handleUserChange}
        />
      </div>
    );
  }

  handleUserChange = ev => {
    if(ev.target.value.length > 10) return;
    this.setState({
      userName: ev.target.value
    });
  };
}

export default UserForm;
