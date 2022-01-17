import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./addMovieBtn.css";

function AddMovieBtn() {
  return (
    <BrowserRouter>
      <Link
        className="addmovie"
        onClick={() => {
          window.location.href = "/add";
        }}
      >
        Add movie
      </Link>
    </BrowserRouter>
  );
}

export default AddMovieBtn;
