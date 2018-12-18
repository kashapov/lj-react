import React, { Component } from "react";

import ArticleList from "./ArticleList";
import ArticlesChart from "./ArticlesChart";
import UserForm from "./UserForm";
import Filters from "./Filters";
import Counter from "./Counter";

import "react-select/dist/react-select.css";

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <UserForm />
        <Filters articles={this.props.articles} />

        <ArticleList articles={this.props.articles} />
        <ArticlesChart articles={this.props.articles} />
      </div>
    );
  }
}

export default App;
