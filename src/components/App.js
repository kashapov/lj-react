import React, { Component } from "react";

import ArticleList from "./ArticleList";
import UserForm from "./UserForm";
import Filters from "./Filters";
import Counter from "./Counter";
import { HashRouter as Router, Route } from "react-router-dom";

import "react-select/dist/react-select.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <UserForm />
          <Route path="/counter" component={Counter} />
          <Route path="/filters" component={Filters} />
          <Route path="/articles" component={ArticleList} />
        </div>
      </Router>
    );
  }
}

export default App;
