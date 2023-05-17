/* eslint-disable */
import "./selectWithLogo.css";
import React from "react";

function SelectWithLog({
  logImg,
  register = (f) => f,
  options = [],
  ...props
}) {
  return (
    <div className="selectWithLogo" {...props}>
      <img className="selectWithLogImg" src={logImg} />
      <select className="selectWithLogInput" {...register}>
        {options.map((option, index) => {
          return (
            <option
              className="selectWithLogOption"
              key={index}
              value={option.optionValue}
            >
              {option.value}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectWithLog;
