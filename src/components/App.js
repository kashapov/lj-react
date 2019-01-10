import React, { Component } from "react";
import PropTypes from "prop-types";
import Articles from "./routes/Articles";
import NewArticle from "./routes/NewAricle";
import NotFound from "./routes/NotFound";
import CommentsPage from "./routes/CommentsPage";
import UserForm from "./UserForm";
import Filters from "./Filters";
import Counter from "./Counter";
import { Switch, Route, NavLink } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import history from "../history";

import "react-select/dist/react-select.css";

class App extends Component {
  static childContextTypes = {
    user: PropTypes.string
  };

  getChildContext() {
    return {
      user: this.state.userName
    };
  }

  state = {
    userName: ""
  };

  handleUserChange = userName => {
    this.setState({ userName });
  };

  render() {
    //console.log(0);

    return (
      <ConnectedRouter history={history}>
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
            <NavLink
              style={{ marginRight: "10px" }}
              activeStyle={{ color: "red" }}
              to="/comments/1"
            >
              Comments
            </NavLink>
          </nav>
          <hr />
          <UserForm
            value={this.state.userName}
            onChange={this.handleUserChange}
          />
          <Switch>
            <Route path="/counter" component={Counter} />
            <Route path="/filters" component={Filters} />
            <Route path="/articles/new" component={NewArticle} />
            <Route path="/articles" component={Articles} />
            <Route path="/comments/:page" component={CommentsPage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
