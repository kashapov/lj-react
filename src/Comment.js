import React from "react";
import Article from "./Article";

export default function Comment({ comment }) {
  return (
    <div>
      <h6>{comment.user}</h6>
      <small>{comment.text}</small>
    </div>
  );
}
