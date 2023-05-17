import React from "react";

function RecordType({ value, ...props }) {
  return (
    <li className="recordType" {...props}>
      {value}
    </li>
  );
}

export default RecordType;
