import React from "react";
import "./searchBar.css";

function SearchBar() {
  return (
    <form className="searchbar" action="/" method="get">
      <input
        className="input"
        type="text"
        id="header-search"
        placeholder="Search movies"
        name="s"
      />
    </form>
  );
}

export default SearchBar;
