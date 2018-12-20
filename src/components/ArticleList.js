import React, { Component } from "react";
import { connect } from "react-redux";

import Article from "./Article";
import accordion from "../decorators/accordion";
import PropTypes from "prop-types";
import { filtrateArticlesSelector } from "../selectors";

class ArticleList extends Component {
  static propTypes = {
    // from connect
    articles: PropTypes.array.isRequired,
    // from accordion
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired
  };

  render() {
    console.log("update article list");
    const { articles, openItemId, toggleOpenItem } = this.props;

    const articleElements = articles.map(article => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={article.id === openItemId}
          toggleOpen={toggleOpenItem(article.id)}
        />
      </li>
    ));

    return <ul>{articleElements}</ul>;
  }
}

export default connect(state => {
  return {
    articles: filtrateArticlesSelector(state)
  };
})(accordion(ArticleList));
