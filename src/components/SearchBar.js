import React, { Component } from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: ""}
  }

  handleChange = (e) => {
    this.setState({ term: e.target.value});
    this.props.onSearchTermChange(e.target.value)
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          placeholder="search for cute videos!"
          onChange={this.handleChange}></input>
      </div>
    );
  }
}

export default SearchBar;
