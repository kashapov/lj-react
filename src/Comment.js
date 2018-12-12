import React from "react";

import PropTypes from "prop-types";

function Comment({ comment }) {
  return (
    <div>
      <h6>{comment.user}</h6>
      <small>{comment.text}</small>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
  }).isRequired
};

export default Comment;
