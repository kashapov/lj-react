import React, { Component } from "react";

import Comment from "./Comment";

class CommentList extends Component {
  static defaultProps = {
    comments: []
  };

  state = {
    isOpen: false
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div>
        <button onClick={this.toggleOpen}>
          {isOpen ? "close comments" : "open comments"}
        </button>
        {this.getComments()}
      </div>
    );
  }

  getComments() {
    if (!this.state.isOpen) return null;

    const { comments } = this.props;

    if (!comments.length) return <small>No comments yet</small>;

    const commentElements = comments.map(comment => (
      <li key={comment.id}>
        <Comment comment={comment} />
      </li>
    ));

    return <section>{commentElements}</section>;
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
}


export default CommentList;
