/* eslint-disable */
import "./signUpForm.css";
import person_img from "../../asset/imgs/person.png"
import email_img from "../../asset/imgs/email.png"
import lock_img from "../../asset/imgs/lock.png"
import heart_img from "../../asset/imgs/heart.png"
import React from "react";
import { useForm } from "react-hook-form";
import InputWithLogo from "../common/input/InputWithLogo";
import SelectWithLogo from "../common/select/SelectWithLogo";
import { POST_LOGIN_URL } from "../../utils/GetURLProps";
import { getLogInFetchProps } from "../../utils/GetFetchProps";

function signUpMember(data) {
  fetch(POST_LOGIN_URL, getLogInFetchProps(data))
    .then((data) => data.json())
    .then((data) => {
      if (data.code != "success")
        return alert("회원정보를 변경한 이후 다시 가입해주세요");
      window.location.href = "/login";
    });
}
function SignUpForm() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="signUpForm">
      <InputWithLogo
        logImg={person_img}
        register={{ ...register("name") }}
        className="signUpFormInput"
        type="text"
        placeholder="name"
        required
      />

      <InputWithLogo
        logImg={email_img}
        register={{ ...register("email") }}
        className="signUpFormInput"
        type="text"
        placeholder="email"
        required
      />

      <InputWithLogo
        logImg={lock_img}
        register={{ ...register("password") }}
        className="signUpFormInput"
        type="password"
        placeholder="password"
        required
      />

      <SelectWithLogo
        logImg={heart_img}
        register={{ ...register("sex") }}
        options={[
          { optionValue: "W", value: "woman" },
          { optionValue: "M", value: "man" },
        ]}
        className="signUpFormSelect"
      />

      <button
        className="signUpFormBtn"
        onClick={handleSubmit((data) => signUpMember(data))}
      >
        Sign up
      </button>
    </div>
  );
}

export default SignUpForm;
