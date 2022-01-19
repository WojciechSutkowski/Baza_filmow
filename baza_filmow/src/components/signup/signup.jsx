import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom/cjs/react-router-dom.min";
import "./signup.css";

const axios = require("axios");

class SignUp extends Component {
  state = {
    account: {
      name: "",
      email: "",
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
    if (account.email.trim() === "") {
      errors.email = "Email is required!";
    }

    if (account.name.trim() === "") {
      errors.name = "Name is required!";
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

    console.log(this.state);

    axios({
      method: "post",
      url: "https://pr-movies.herokuapp.com/api/user/create",
      data: {
        name: this.state.account.name,
        email: this.state.account.email,
        password: this.state.account.password,
      },
    })
      .then((response) => {
        this.handleChangeRoute();
      })
      .catch((error) => {
        const errors = {};
        errors.password = "Given username or email exists!";
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
      <div className="signup_container">
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit} className="signup_form_container">
          <input
            className="form-input"
            value={this.state.account.email}
            name="email"
            onChange={this.handleChange}
            type="email"
            id="email"
            placeholder="Email"
          />
          {this.state.errors.email && (
            <div className="alert alert-danger">{this.state.errors.email}</div>
          )}

          <input
            className="form-input"
            value={this.state.account.name}
            name="name"
            onChange={this.handleChange}
            type="text"
            id="name"
            placeholder="Name"
          />
          {this.state.errors.name && (
            <div className="alert alert-danger">{this.state.errors.name}</div>
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

          <div className="buttons-su">
            <button type="submit" className="signup-btn-su">
              Sign Up
            </button>

            <p>or</p>

            <BrowserRouter>
              <Link
                className="signin-btn-su"
                onClick={() => {
                  window.location.href = "/signin";
                }}
              >
                Sign In
              </Link>
            </BrowserRouter>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
