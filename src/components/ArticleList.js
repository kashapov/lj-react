import React, { Component } from "react";

import Article from "./Article";
import toggleOpen from "../decorators/toggleOpen";

export default class ArticleList extends Component {
  state = {
    openArticleId: null
  };

  render() {
    const articleElements = this.props.articles.map(article => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={article.id === this.state.openArticleId}
          toggleOpen={this.toggleopenArticle(article.id)}
        />
      </li>
    ));

    return <ul>{articleElements}</ul>;
  }

  toggleopenArticle = openArticleId => ev => {
    this.setState({ openArticleId: openArticleId });
  };
}
