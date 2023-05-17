import "./permRecordForm.css";
import React from "react";
import HurtLists from "./HurtLists";

function PermRecordForm({
  permNameRegister = (f) => f,
  permTimeRegister = (f) => f,
  hurt,
  setHurt = (f) => f,
}) {
  return (
    <div className="recordWriteMainFromPerm">
      <div className="recordWriteMainFromPermName">
        <p>펌 이름</p>
        <input type="text" required {...permNameRegister} />
      </div>

      <div className="recordWriteMainFromPermTime">
        <p>소요시간</p>
        <input type="text" required {...permTimeRegister} />
      </div>

      <div className="recordWriteMainFromPermHurt">
        <p>시술 후 상함 정도</p>
        <HurtLists hurt={hurt} setHurt={setHurt} />
      </div>
    </div>
  );
}

export default PermRecordForm;
