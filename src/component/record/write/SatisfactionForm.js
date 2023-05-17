import "./satisfaction.css";
import React from "react";

const MIN = 1;
const MAX = 5;
function SatisfactionForm({ RecordHash, satisfactionRegister = (f) => f }) {
  if (RecordHash !== 2) {
    return <> </>;
  } else {
    return (
      <div className="recordWriteSatisfaction">
        <p>시술 만족도</p>
        <form>
          <input
            className="recordWriteSatisfactionBar"
            type="range"
            min={MIN}
            max={MAX}
            {...satisfactionRegister}
          />
        </form>
      </div>
    );
  }
}

export default SatisfactionForm;
