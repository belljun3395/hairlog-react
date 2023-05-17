import "./hairlogHead.css";
import React from "react";

function HairlogHead({ ...props }) {
  return (
    <h1
      className="hairlogHead"
      onClick={() => {
        window.location.href = "/";
      }}
      {...props}
    >
      Hair Log
    </h1>
  );
}

export default HairlogHead;
