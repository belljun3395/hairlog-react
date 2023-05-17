import React from "react";

function HurtList({ value, ...props }) {
  return (
    <li className="hurtList" {...props}>
      {value}
    </li>
  );
}

export default HurtList;
