import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import logo from "./logo.png";

function Logo() {
  return (
    <BrowserRouter>
      <Link
        className="logo"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <img src={logo} alt="Logo" />
      </Link>
    </BrowserRouter>
  );
}

export default Logo;
