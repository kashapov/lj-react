import React from "react";

import Comment from "./Comment";
import toggleOpen from "../decorators/toggleOpen";

function CommentList({ comments = [], isOpen, toggleOpen }) {
  return (
    <div>
      <button onClick={toggleOpen}>
        {isOpen ? "close comments" : "open comments"}
      </button>
      {getComments({ comments, isOpen })}
    </div>
  );
}

function getComments({ comments, isOpen }) {
  if (!isOpen) return null;

  if (!comments.length) return <small>No comments yet</small>;

  const commentElements = comments.map(comment => (
    <li key={comment.id}>
      <Comment comment={comment} />
    </li>
  ));

  return <section>{commentElements}</section>;
}

export default toggleOpen(CommentList);
