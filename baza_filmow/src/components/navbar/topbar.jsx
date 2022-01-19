import React from "react";
import Logo from "./logo/logo";
// import SearchBar from "./search/searchBar";
import "./topbar.css";
import { isExpired, decodeToken } from "react-jwt";
import { BrowserRouter, Link } from "react-router-dom";

const Topbar = () => {
  const user = decodeToken(localStorage.getItem("token"));
  const isNotLogged = isExpired(localStorage.getItem("token"));

  const handleChangeRoute = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="navbar_container">
      <Logo />
      {/* <SearchBar /> */}

      <BrowserRouter>
        <ul className="navbar-btns">
          {isNotLogged && (
            <li className="btn-signin">
              <Link
                className="signin-link"
                onClick={() => {
                  window.location.href = "/signin";
                }}
              >
                Sign In
              </Link>
            </li>
          )}
          {!isNotLogged && (
            <li className="btns-signed">
              <span className="hello-info">{user.name}</span>
              <Link
                className="btn-add"
                onClick={() => {
                  window.location.href = "/add";
                }}
              >
                Add movie
              </Link>
              <Link
                to="/"
                onClick={handleChangeRoute}
                className="btn-logout"
                href="#"
              >
                Log out
              </Link>
            </li>
          )}
        </ul>
      </BrowserRouter>
    </div>
  );
};

export default Topbar;
