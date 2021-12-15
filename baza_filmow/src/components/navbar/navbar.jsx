import React from "react";
import Logo from "./logo/logo";
import SearchBar from "./search/searchBar";
import SignIn from "./signin/signInBtn";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <Logo />
      <SearchBar />
      <SignIn />
    </div>
  );
};

export default Navbar;
