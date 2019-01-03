import React, { Component } from "react";

import ArticleList from "./ArticleList";
import UserForm from "./UserForm";
import Filters from "./Filters";
import Counter from "./Counter";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import "react-select/dist/react-select.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Main menu</h2>
          <nav>            
            <Link to="/counter">Counter</Link>
            <Link to="/filters">Filters</Link>
            <Link to="/articles">Articles</Link>
          </nav><hr/>
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
