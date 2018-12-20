import React, { Component } from "react";

import { connect } from "react-redux";
import { changeSelection } from "../../AC";
import PropTypes from "prop-types";
import Select from "react-select";

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  };

  render() {
    const { selected } = this.props;
    const { articles } = this.props;

    const options = articles.map(article => ({
      label: article.title,
      value: article.id
    }));

    return (
      <Select
        options={options}
        value={selected}
        onChange={this.handleChange}
        multi
      />
    );
  }

  handleChange = selected =>
    this.props.changeSelection(selected.map(option => option.value));
}

export default connect(
  state => ({
    selected: state.filters.selected,
    articles: state.articles
  }),
  { changeSelection }
)(SelectFilter);
