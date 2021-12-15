import React, { Component } from "react";
import "./movieDetails.css";

class Details extends Component {
  render() {
    return (
      <div className="details_container">
        <div className="details_titles">
          <p className="details_titlePL">Polski tytuł</p>
          <p className="details_titleEN">English title</p>
        </div>
        <div className="details_poster">
          <img
            src="https://fwcdn.pl/fpo/10/89/1089/7196615.3.jpg"
            alt="poster"
          />
        </div>
        <div className="details_year">
          <p className="details_movieYear">Rok produkcji: 1234</p>
        </div>
        <div className="details_rating">
          <p className="details_rate">9/10</p>
          <p className="details_ratingsAmount">Ilość ocen: 1234</p>
        </div>
        <div className="details_genre">
          <p className="details_movieGenre">Gatunek: Gangsterski</p>
        </div>
        <div className="details_director">
          <p className="details_movieDirector">Reżyser: Jan Kowalski</p>
        </div>
      </div>
    );
  }
}

export default Details;
