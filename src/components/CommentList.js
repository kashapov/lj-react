import React, { Component } from "react";

import Comment from "./Comment";
import toggleOpen from "../decorators/toggleOpen";

class CommentList extends Component {
  static defaultProps = {
    comments: []
  };

  render() {
    const { isOpen } = this.props;

    return (
      <div>
        <button onClick={this.props.toggleOpen}>
          {isOpen ? "close comments" : "open comments"}
        </button>
        {this.getComments()}
      </div>
    );
  }

  getComments() {
    const { comments, isOpen } = this.props;

    if (!isOpen) return null;

    if (!comments.length) return <small>No comments yet</small>;

    const commentElements = comments.map(comment => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ));

    return <section>{commentElements}</section>;
  }
}

export default toggleOpen(CommentList);
