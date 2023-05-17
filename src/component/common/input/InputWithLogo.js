/* eslint-disable */
import "./inputWithLogo.css";
import React from "react";

function InputWithLogo({ logImg, register = (f) => f, ...props }) {
  return (
    <div className="inputWithLogo">
      <img className="inputWithLogoImg" src={logImg} />
      <input className="inputWithLogoInput" {...props} {...register} />
    </div>
  );
}

export default InputWithLogo;
