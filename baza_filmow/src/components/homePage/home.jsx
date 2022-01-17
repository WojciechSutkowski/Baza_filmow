import React, { Component } from "react";
import Movie from "../movie/movie";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://pr-movies.herokuapp.com/api/movies")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          movies: json,
          isLoaded: true,
        });
      });
  }

  render() {
    const { isLoaded, movies } = this.state;

    if (!isLoaded) {
      return <p>Loading...</p>;
    }

    return (
      <React.Fragment>
        <div className="contents">
          {movies.reverse().map((movie) => (
            <Movie title={movie.title} image={movie.image} id={movie.id} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
