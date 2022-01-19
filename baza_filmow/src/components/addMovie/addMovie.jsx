import React, { Component } from "react";
import "./addMovie.css";
import axios from "axios";

class AddMovie extends Component {
  state = {
    movie: {
      title: "",
      image: "",
      content: "",
    },
    errors: {},
  };
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeRoute = () => {
    this.props.history.push("/");
    window.location.reload();
  };

  validate = () => {
    const errors = {};

    const { movie } = this.state;
    if (movie.title === "") {
      errors.title = "Title is required!";
    }

    if (movie.image === "") {
      errors.image = "Poster is required!";
    }

    if (movie.content.trim() === "") {
      errors.content = "Description is required!";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    axios({
      method: "post",
      url: "https://pr-movies.herokuapp.com/api/movies",
      data: {
        title: this.state.movie.title,
        image: this.state.movie.image,
        content: this.state.movie.content,
      },
    })
      .then((response) => {
        this.handleChangeRoute();
      })
      .catch((error) => {
        const errors = {};
        this.setState({ errors: errors || {} });
        console.log(error);
      });
  };

  handleChange = (event) => {
    const movie = { ...this.state.movie };
    movie[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ movie });
  };

  render() {
    return (
      <div className="add_container">
        <h1>Add movie</h1>
        <form onSubmit={this.handleSubmit} className="add_form_container">
          <input
            className="form-input"
            value={this.state.movie.title}
            name="title"
            onChange={this.handleChange}
            type="text"
            placeholder="Title"
          />
          {this.state.errors.title && (
            <div className="alert alert-danger">{this.state.errors.title}</div>
          )}

          <input
            className="form-input"
            value={this.state.movie.image}
            name="image"
            onChange={this.handleChange}
            type="text"
            placeholder="Poster url"
          />
          {this.state.errors.image && (
            <div className="alert alert-danger">{this.state.errors.image}</div>
          )}

          <input
            className="form-input"
            value={this.state.movie.content}
            name="content"
            onChange={this.handleChange}
            type="text"
            placeholder="Description"
          />
          {this.state.errors.content && (
            <div className="alert alert-danger">
              {this.state.errors.content}
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
