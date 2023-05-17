import React from "react";

function RecordBaseResult({ data }) {
  return (
    <>
      <p className="recordReadResultData">{"날짜 : " + data.recordDate} </p>
      <p className="recordReadResultCost">{"비용 : " + data.recordCost} </p>
      <p className="recordReadResultEtc">{"메모 : " + data.recordEtc}</p>
      <p className="recordReadResultGrade">{"만족도 : " + data.recordGrade}</p>
    </>
  );
}

export default RecordBaseResult;
