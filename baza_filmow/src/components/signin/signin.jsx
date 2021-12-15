import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./signin.css";

const axios = require("axios");

class SignIn extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };

  handleChangeRoute = () => {
    this.props.history.push("/");
    window.location.reload();
  };

  validate = () => {
    const errors = {};

    const { account } = this.state;
    if (account.username.trim() === "") {
      errors.username = "Username is required!";
    }
    if (account.password.trim() === "") {
      errors.password = "Password is required!";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    axios({
      method: "post",
      url: "http://localhost:3001/api/user/auth",
      data: {
        login: this.state.account.username,
        password: this.state.account.password,
      },
    })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        this.handleChangeRoute();
      })
      .catch((error) => {
        const errors = {};
        errors.password = "Given username doesn't exists or password is wrong!";
        this.setState({ errors: errors || {} });
        console.log(error);
      });
  };

  handleChange = (event) => {
    const account = { ...this.state.account };
    account[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <div className="signin_container">
        <h1>Sign In</h1>
        <form onSubmit={this.handleSubmit} className="signin_form_container">
          <input
            className="form-input"
            value={this.state.account.username}
            name="username"
            onChange={this.handleChange}
            type="text"
            id="username"
            aria-describedby="emailHelp"
            placeholder="Username"
          />
          {this.state.errors.username && (
            <div className="alert alert-danger">
              {this.state.errors.username}
            </div>
          )}

          <input
            className="form-input"
            value={this.state.account.password}
            name="password"
            onChange={this.handleChange}
            type="password"
            id="password"
            placeholder="Password"
          />
          {this.state.errors.password && (
            <div className="alert alert-danger">
              {this.state.errors.password}
            </div>
          )}

          <div className="buttons-si">
            <button type="submit" className="signin-btn-si">
              Sign In
            </button>

            <p>or</p>

            <BrowserRouter>
              <Link
                className="signup-btn-si"
                onClick={() => {
                  window.location.href = "/signup";
                }}
              >
                Sign Up
              </Link>
            </BrowserRouter>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
