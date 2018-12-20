import React from "react";

import { connect } from "react-redux";
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
  id: PropTypes.string.isRequired,
  // from connect
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
  }).isRequired
};

export default connect((state, ownProps) => {
  return {
    comment: state.commentsReducer.find(comment => comment.id === ownProps.id)
  };
})(Comment);
