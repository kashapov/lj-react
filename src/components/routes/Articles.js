import React, { Component } from "react";
import ArticleList from "../ArticleList";
import Article from "../Article";
import { Route } from "react-router-dom";

class Articles extends Component {
  render() {
    //console.log(1);
    return (
      <div>
        <Route path="/articles" children={this.getIndex} exact />
        <ArticleList />        
        <Route path="/articles/:id" render={this.getArticle} />
      </div>
    );
  }

  getArticle = ({ match }) => {
    const { id } = match.params;
    return <Article id={id} isOpen key={id} />;
  };

  getIndex = ({ match }) => {
    if(!match) return <h3>Article Page:</h3>
    return <h2>Please select article:</h2>;
  };
}

export default Articles;
