import React, { Component } from "react";
import Logo from "./logo/logo";
import SearchBar from "./search/searchBar";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <Logo />
      <SearchBar />
    </div>
  );
};

export default Navbar;
