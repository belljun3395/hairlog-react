/* eslint-disable */
import "./loginForm.css";
import person_img from "../../asset/imgs/person.png";
import lock_img from "../../asset/imgs/lock.png";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputWithLogo from "../common/input/InputWithLogo";
import { POST_LOGIN_URL } from "../../utils/GetURLProps";
import { getLogInFetchProps } from "../../utils/GetFetchProps";
import { extractAccessTokenFromData } from "../../utils/ExtractData";

const HAIRLOG_TOKEN_KEY = "hairlog_accessToken=";
function LoginForm() {
  const { register, handleSubmit } = useForm();
  const [loginFailStatus, setloginFailStatus] = useState("hidden");

  function logIn(data) {
    fetch(POST_LOGIN_URL, getLogInFetchProps(data))
      .then((data) => data.json())
      .then((data) => {
        if (data.code != "success") return setloginFailStatus(null);
        document.cookie = HAIRLOG_TOKEN_KEY + extractAccessTokenFromData(data);
        window.location.href = "/";
      });
  }

  return (
    <div>
      <form
        className="loginForm"
        onSubmit={handleSubmit((data) => {
          logIn(data);
        })}
      >
        <InputWithLogo
          logImg={person_img}
          register={{ ...register("id") }}
          className="loginFormInput"
          type="text"
          placeholder="email"
          required
        />

        <InputWithLogo
          logImg={lock_img}
          register={{ ...register("password") }}
          className="loginFormInput"
          type="text"
          placeholder="password"
          required
        />

        <p className={"loginFormStatus " + loginFailStatus}>
          로그인에 실패하였습니다
        </p>

        <button className="loginFormBtn" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
