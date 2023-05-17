import "./signUp.css";
import React from "react";
import SignUpForm from "../../component/signUp/SignUpForm";

function SignUp() {
  return (
    <div className="signUp">
      <h1 className="signUpHead">Sign up</h1>
      <SignUpForm />
    </div>
  );
}

export default SignUp;
