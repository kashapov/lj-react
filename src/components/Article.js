import React, { Component, PureComponent } from "react";
import { findDOMNode } from "react-dom";

import PropTypes from "prop-types";
import CommentList from "./CommentList";

class Article extends PureComponent {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  };

  state = {
    updateIndex: 0
  };
  /*
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.isOpen !== this.props.isOpen
  }*/

  componentWillReceiveProps(nextProps) {
    /*console.log(
      "---",
      "updating componentWillReceiveProps",
      this.props.isOpen,
      nextProps.isOpen
    );*/
  }

  componentWillMount() {
    //console.log("---", "mounting componentWillMount");
  }

  render() {
    const { article, isOpen, toggleOpen } = this.props;
    //console.log("---", "update article");
    return (
      <div ref={this.setContainerRef}>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>
          {isOpen ? "close article" : "open article"}
        </button>
        {this.getArticleText()}
      </div>
    );
  }

  setContainerRef = ref => {
    //this.container = ref;
    //console.log(ref);
  };

  setCommentsRef = ref => {
    //console.log(findDOMNode(ref));
  };

  componentDidMount() {
    //console.log("---", "mounted componentDidMount");
  }

  getArticleText() {
    const { article, isOpen } = this.props;

    if (!isOpen) return null;
    return (
      <section>
        {article.text}
        <button
          onClick={() =>
            this.setState({ updateIndex: this.state.updateIndex + 1 })
          }
        >
          update
        </button>
        <CommentList
          comments={article.comments}
          ref={this.setCommentsRef}
          key={this.state.updateIndex}
        />
      </section>
    );
  }
}

export default Article;
