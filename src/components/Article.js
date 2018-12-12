import React, { Component } from "react";

import PropTypes from "prop-types";
import CommentList from "./CommentList";
import toggleOpen from "../decorators/toggleOpen";

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired
  };

  componentWillReceiveProps(nextProps) {
    console.log("---", "updating componentWillReceiveProps", this.props.isOpen, nextProps.isOpen);
  }

  componentWillMount() {
    console.log("---", "mounting componentWillMount");
  }

  render() {
    const { article, isOpen, toggleOpen } = this.props;

    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>
          {isOpen ? "close article" : "open article"}
        </button>
        {this.getArticleText()}
      </div>
    );
  }

  componentDidMount() {
    console.log("---", "mounted componentDidMount");
  }

  getArticleText() {
    const { article, isOpen } = this.props;

    if (!isOpen) return null;
    return (
      <section>
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    );
  }
}

export default toggleOpen(Article);
