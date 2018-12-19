import React, { Component } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { increment } from "./AC";

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number
  };

  render() {
    return (
      <div>
        <h2>{this.props.counter}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }

  handleIncrement = () => {
    //console.log("increment");
    this.props.increment();
  };
}

export default connect(
  state => ({
    counter: state.count
  }),
  { increment }
)(Counter);
