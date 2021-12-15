import React, { Component } from "react";
import "./addMovie.css";

class AddMovie extends Component {
  state = {
    account: {
      titlePL: "",
      titleEN: "",
      year: "",
      poster: "",
      genre: "",
      director: "",
    },
    errors: {},
  };

  handleChangeRoute = () => {
    this.props.history.push("/");
    window.location.reload();
  };

  validate = () => {
    const errors = {};

    const { account } = this.state;
    if (account.titlePL.trim() === "") {
      errors.titlePL = "Polish title is required!";
    }
    if (account.titleEN.trim() === "") {
      errors.titleEN = "English title is required!";
    }
    if (account.year.trim() === "") {
      errors.year = "Year is required!";
    }
    if (account.poster.trim() === "") {
      errors.poster = "Poster title is required!";
    }
    if (account.genre.trim() === "") {
      errors.genre = "Genre title is required!";
    }
    if (account.director.trim() === "") {
      errors.director = "Director title is required!";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
  };

  handleChange = (event) => {
    const account = { ...this.state.account };
    account[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <div className="add_container">
        <h1>Add movie</h1>
        <form onSubmit={this.handleSubmit} className="add_form_container">
          <input
            className="form-input"
            value={this.state.account.titlePL}
            name="titlePL"
            onChange={this.handleChange}
            type="text"
            id="titlePL"
            placeholder="Polish title"
          />
          {this.state.errors.titlePL && (
            <div className="alert alert-danger">
              {this.state.errors.titlePL}
            </div>
          )}

          <input
            className="form-input"
            value={this.state.account.titleEN}
            name="titleEN"
            onChange={this.handleChange}
            type="text"
            id="titleEN"
            placeholder="English title"
          />
          {this.state.errors.titleEN && (
            <div className="alert alert-danger">
              {this.state.errors.titleEN}
            </div>
          )}

          <input
            className="form-input"
            value={this.state.account.year}
            name="year"
            onChange={this.handleChange}
            type="text"
            id="year"
            placeholder="Year"
          />
          {this.state.errors.year && (
            <div className="alert alert-danger">{this.state.errors.year}</div>
          )}

          <input
            className="form-input"
            value={this.state.account.poster}
            name="poster"
            onChange={this.handleChange}
            type="text"
            id="poster"
            placeholder="Poster URL"
          />
          {this.state.errors.poster && (
            <div className="alert alert-danger">{this.state.errors.poster}</div>
          )}
          <input
            className="form-input"
            value={this.state.account.genre}
            name="genre"
            onChange={this.handleChange}
            type="text"
            id="genre"
            placeholder="Genre"
          />
          {this.state.errors.genre && (
            <div className="alert alert-danger">{this.state.errors.genre}</div>
          )}

          <input
            className="form-input"
            value={this.state.account.director}
            name="director"
            onChange={this.handleChange}
            type="text"
            id="director"
            placeholder="Director"
          />
          {this.state.errors.director && (
            <div className="alert alert-danger">
              {this.state.errors.director}
            </div>
          )}

          <div className="buttons-add">
            <button type="submit" className="add-btn">
              Add movie
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddMovie;
