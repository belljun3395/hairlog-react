import React from "react";

function Designer({ designerName, ...props }) {
  return (
    <option className="designer" {...props}>
      {designerName}
    </option>
  );
}

export default Designer;
