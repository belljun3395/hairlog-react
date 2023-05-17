/* eslint-disable */
import React from "react";
import Record from "./RecordBox";

function RecordBoxes({ data }) {
  return (
    <>
      {data.map((d) => (
        <Record
          key={d.recordId}
          rid={d.recordId}
          category={d.recordCategory}
          date={d.recordDate.split("T")[0].split("-").join("/")}
        />
      ))}
    </>
  );
}

export default RecordBoxes;
