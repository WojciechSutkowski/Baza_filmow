import React, { Component } from "react";
import MoviesContainer from "./moviesContainer";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    const path = "http://localhost:8000/movies";
    fetch(path)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
          console.log(result);
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { items } = this.state;

    if (!items.length) {
      return <p>Brak filmów</p>;
    }

    const movies = items;

    return (
      <React.Fragment>
        <MoviesContainer items={movies} />
      </React.Fragment>
    );
  }
}

export default Movie;
