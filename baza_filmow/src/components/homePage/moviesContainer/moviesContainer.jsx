import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./moviesContainer.css";

const MoviesContainer = (props) => {
  const { items } = props;

  return (
    <div className="content_container">
      {items.map((item, key) => (
        <div className="movie" key={key}>
          <BrowserRouter>
            <Link
              className="poster"
              onClick={() => {
                window.location.href = "/details";
              }}
            >
              <img src={item.poster} alt={key} />
            </Link>
            <Link
              className="titles"
              onClick={() => {
                window.location.href = "/details";
              }}
            >
              <p className="titlePL">{item.titlePL}</p>
              {/* <p className="titleEN">{item.titleEN}</p> */}
            </Link>
          </BrowserRouter>
          <div className="bar">
            {" "}
            <div className="year">
              <p className="movieYear">{item.year}</p>
            </div>
            <div className="rating">
              <p className="rate">{item.rate}</p>
              {/* <p className="ratingsAmount">{item.ratingsAmount} ocen</p> */}
            </div>
          </div>

          {/* <div className="genre">
            <p className="movieGenre">Gatunek: {item.genre}</p>
          </div>
          <div className="director">
            <p className="movieDirector">Reżyser: {item.director}</p>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default MoviesContainer;
