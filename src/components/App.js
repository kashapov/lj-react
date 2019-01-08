import React, { Component } from "react";

import Articles from "./routes/Articles";
import UserForm from "./UserForm";
import Filters from "./Filters";
import Counter from "./Counter";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import "react-select/dist/react-select.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Main menu</h2>
          <nav>
            <NavLink
              style={{ marginRight: "10px" }}
              activeStyle={{ color: "red" }}
              to="/counter"
            >
              Counter
            </NavLink>
            <NavLink
              style={{ marginRight: "10px" }}
              activeStyle={{ color: "red" }}
              to="/filters"
            >
              Filters
            </NavLink>
            <NavLink
              style={{ marginRight: "10px" }}
              activeStyle={{ color: "red" }}
              to="/articles"
            >
              Articles
            </NavLink>
          </nav>
          <hr />
          <UserForm />
          <Route path="/counter" component={Counter} />
          <Route path="/filters" component={Filters} />
          <Route path="/articles" component={Articles} />
        </div>
      </Router>
    );
  }
}

export default App;
