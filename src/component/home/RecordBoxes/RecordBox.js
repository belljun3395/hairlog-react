import "./recordBox.css";
import React from "react";

function RecordBox({ rid, category, date }) {
  return (
    <div
      className="reocordBox"
      onClick={() =>
        (window.location.href = `/records?rid=${rid}&c=${category}`)
      }
    >
      <p>{date}</p>
    </div>
  );
}

export default RecordBox;
