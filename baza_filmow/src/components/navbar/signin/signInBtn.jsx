import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./signInBtn.css";

function SignInBtn() {
  return (
    <BrowserRouter>
      <Link
        className="signin"
        onClick={() => {
          window.location.href = "/signin";
        }}
      >
        Sign In
      </Link>
    </BrowserRouter>
  );
}

export default SignInBtn;
