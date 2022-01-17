import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./movie.css";

class Movie extends Component {
  render() {
    const link = "/details/" + this.props.id;
    return (
      <div className="movie">
        <Link to={link} className="link">
          <img src={this.props.image} className="poster" alt="logo" />
        </Link>
        <div>
          <Link to={link} className="link">
            <p className="title">{this.props.title}</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Movie;
