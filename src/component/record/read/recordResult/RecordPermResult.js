import React from "react";

function RecordPermResult({ data }) {
  return (
    <>
      <p className="recordReadResultPermName">{"펌 이름 : " + data.permName}</p>
      <p className="recordReadResultPermLength">
        {"펌 시간 : " + data.permTime}
      </p>
      <p className="recordReadResultPermHurt">{"펌 손상 : " + data.permHurt}</p>
    </>
  );
}

export default RecordPermResult;
