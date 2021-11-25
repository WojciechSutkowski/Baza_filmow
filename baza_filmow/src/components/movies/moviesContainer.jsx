import React from "react";
import "./moviesContainer.css";

const MoviesContainer = (props) => {
  const { items } = props;

  return (
    <div className="content_container">
      {items.map((item, key) => (
        <div className="movie" key={key}>
          <div className="poster">
            <img
              style={{ width: "auto", height: "8rem" }}
              src={item.poster}
              alt={key}
            />
          </div>
          <div className="titles">
            <p className="titlePL">{item.titlePL}</p>
            <p className="titleEN">{item.titleEN}</p>
          </div>
          <div className="year">
            <p>{item.year}</p>
          </div>
          <div className="rating">
            <p className="rate">Ocena: {item.rate}</p>
            <p className="ratingsAmount">{item.ratingsAmount} ocen</p>
          </div>
          <div className="genre">
            <p>Gatunek: {item.genre}</p>
          </div>
          <div className="director">
            <p>Reżyser: {item.director}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviesContainer;
