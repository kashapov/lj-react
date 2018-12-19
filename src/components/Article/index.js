import React, { Component, PureComponent } from "react";
import { findDOMNode } from "react-dom";
import { connect } from "react-redux";

import { deleteArticle } from "../AC";
import PropTypes from "prop-types";
import CommentList from "../CommentList";
import { CSSTransitionGroup } from "react-transition-group";
import "./style.css";

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
        <button onClick={this.handleDelete}>Delete</button>
        <CSSTransitionGroup
          transitionName="article"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={500}
        >
          {this.getArticleText()}
        </CSSTransitionGroup>
      </div>
    );
  }

  handleDelete = () => {
    const { deleteArticle, article } = this.props;
    deleteArticle(article.id);
    //console.log("delete article");
  };

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

    let btn_update = (
      <button
        onClick={() =>
          this.setState({ updateIndex: this.state.updateIndex + 1 })
        }
      >
        update
      </button>
    );

    if (!isOpen) return null;
    return (
      <section>
        {article.text}
        {/*btn_update*/}
        <CommentList
          comments={article.comments}
          ref={this.setCommentsRef}
          key={this.state.updateIndex}
        />
      </section>
    );
  }
}

export default connect(
  null,
  { deleteArticle }
)(Article);
