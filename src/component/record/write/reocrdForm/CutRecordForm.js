import "./cutRecordForm.css";
import React from "react";

function CutRecordForm({
  cutNameRegister = (f) => f,
  cutLengthRegister = (f) => f,
}) {
  return (
    <div className="recordWriteMainFromCut">
      <div className="recordWriteMainFromCutName">
        <p>컷 종류</p>
        <input type="text" required {...cutNameRegister} />
      </div>

      <div className="recordWriteMainFromCutLength">
        <p>컷 길이</p>
        <input type="text" required {...cutLengthRegister} />
      </div>
    </div>
  );
}

export default CutRecordForm;
