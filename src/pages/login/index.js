/* eslint-disable */
import "./login.css";
import React from "react";
import LoginForm from "../../component/login/LoginForm";

function Login() {
  return (
    <>
      <h1 className="loginHead">Login</h1>

      <LoginForm />

      <p
        className="loginToSignup"
        onClick={() => (window.location.href = "/signUp")}
      >
        Create new
      </p>
    </>
  );
}

export default Login;
