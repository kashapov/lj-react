import React, { Component } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { filtrateArticlesSelector } from "../selectors";
import { loadAllArticles } from "../AC";
import Loader from "./Loader";
import { NavLink } from "react-router-dom";

class ArticleList extends Component {
  static propTypes = {
    // from connect
    articles: PropTypes.array.isRequired,
    // from accordion
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func
  };

  componentDidMount() {
    const { loaded, loading, loadAllArticles } = this.props;
    if (!loaded && !loading) loadAllArticles();
  }

  render() {
    //console.log("update article list");
    const { articles, loading } = this.props;

    if (loading) return <Loader />;

    const articleElements = articles.map(article => (
      <li key={article.id}>
        {/*<Article
          article={article}
          isOpen={article.id === openItemId}
          toggleOpen={toggleOpenItem(article.id)}
        />*/}
        <NavLink to={`/articles/${article.id}`} activeStyle={{ color: "red" }}>
          {article.title}
        </NavLink>
      </li>
    ));

    return (
      
        <ul>{articleElements}</ul>
       
    );
  }
}

export default connect(
  state => {
    return {
      articles: filtrateArticlesSelector(state),
      loading: state.articles.loading,
      loaded: state.articles.loaded
    };
  },
  { loadAllArticles }
)(ArticleList);
