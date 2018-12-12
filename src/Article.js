import React, { Component } from "react";

import PropTypes from "prop-types";
import CommentList from "./CommentList";

export default class Article extends Component {
  
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render() {
    const { article } = this.props;
    const { isOpen } = this.state;

    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={this.toggleOpen}>
          {isOpen ? "close article" : "open article"}
        </button>
        {this.getArticleText()}
      </div>
    );
  }

  getArticleText() {
    if (!this.state.isOpen) return null;
    const { article } = this.props;
    return (
      <section>
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    );
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
}
