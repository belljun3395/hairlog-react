import "./recordTypes.css";
import React from "react";
import RecordType from "./RecordType";

const CUT = { typeE: "CUT", typeK: "컷" };
const PERM = { typeE: "PERM", typeK: "펌" };
const DYEING = { typeE: "DYEING", typeK: "염색" };
const RECORDTYPES = [CUT, PERM, DYEING];
function isSelected(recordTypeState, type) {
  let selected = "";
  if (recordTypeState.recordTypeState === type.typeE) {
    selected = " selected";
  }
  return selected;
}
function RecordTypes({ recordTypeState, setRecordType = (f) => f }) {
  return (
    <div className="recordWriteMainTypes">
      <p className="recordWriteMainTypesHead">시술 종류</p>
      <ul>
        {RECORDTYPES.map((recordType, index) => {
          return (
            <RecordType
              key={index}
              value={recordType.typeK}
              className={
                "recordWriteMainType " + isSelected(recordTypeState, recordType)
              }
              onClick={() => {
                setRecordType(recordType.typeE);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default RecordTypes;
