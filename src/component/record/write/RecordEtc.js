import "./recordEtc.css";
import React from "react";

function RecordEtc({ RecordHash, recordEtcRegiseter = (f) => f }) {
  if (RecordHash !== 2) {
    return <></>;
  } else {
    return (
      <div className="recordWriteEtc">
        <p>추가 기록</p>
        <div>
          <textarea id="inputbox" cols="51" rows="22" {...recordEtcRegiseter} />
        </div>
      </div>
    );
  }
}

export default RecordEtc;
