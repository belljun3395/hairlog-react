import React from "react";
function RecordCutResult({ data }) {
  return (
    <>
      <p className="recordReadResultCutName">{"컷 이름 : " + data.cutName}</p>
      <p className="recordReadResultCutLength">
        {"컷 길이 : " + data.cutLength}
      </p>
    </>
  );
}

export default RecordCutResult;
