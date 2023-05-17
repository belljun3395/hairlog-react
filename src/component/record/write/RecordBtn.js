import "./recordBtn.css";
import React from "react";

const LAST_PAGE = 2;

function RecordBtn({ RecordHash, setRecordHash = (f) => f }) {
  const getButtonValue = (RecordHash) =>
    RecordHash < LAST_PAGE ? "다음" : "완료";

  return RecordHash < LAST_PAGE ? (
    <button
      className="recordWriteBtn"
      onClick={() => {
        setRecordHash(RecordHash + 1);
      }}
    >
      {getButtonValue(RecordHash)}
    </button>
  ) : (
    <button className="recordWriteBtn" type="submit">
      {getButtonValue(RecordHash)}
    </button>
  );
}

export default RecordBtn;
