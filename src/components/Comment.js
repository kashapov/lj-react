import React from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { commentSelectorFactory } from "../selectors";

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

const mapStateToProps = () => {
  const commentSelector = commentSelectorFactory();
  return (state, ownProps) => {
    return {
      comment: commentSelector(state, ownProps)
    };
  };
};

export default connect(mapStateToProps)(Comment);
