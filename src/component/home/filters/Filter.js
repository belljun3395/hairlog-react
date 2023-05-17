import "./filter.css";
import React from "react";

function Filter({ value, filterClick = (f) => f, ...props }) {
  return (
    <>
      <p className="filter" onClick={() => filterClick()} {...props}>
        {value}
      </p>
    </>
  );
}

export default Filter;
