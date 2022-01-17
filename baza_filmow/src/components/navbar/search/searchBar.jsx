import React, { Component } from "react";
import "./searchBar.css";
import { withRouter } from "react-router-dom";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let link = "/details/" + this.state.query;
    this.props.history.push(link);
    window.location.reload();
  }

  render() {
    return (
      <form className="searchbar" onSubmit={this.handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Search movie by ID"
          value={this.state.query}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default withRouter(SearchBar);
