import "./dyeingRecordForm.css";
import React from "react";
import HurtLists from "./HurtLists";

function DyeingRecordForm({
  dyeingColorRegister = (f) => f,
  dyeingDecolorizationRegister = (f) => f,
  dyeingTimeRegister = (f) => f,
  hurt,
  setHurt = (f) => f,
}) {
  return (
    <div className="recordWriteMainFromDyeing">
      <div className="recordWriteMainFromDyeingColor">
        <p>시술 색</p>
        <input type="text" required {...dyeingColorRegister} />
      </div>

      <div className="recordWriteMainFromDyeingDecolorization">
        <p>탈색여부</p>
        <input type="text" required {...dyeingDecolorizationRegister} />
      </div>

      <div className="recordWriteMainFromDyeingTime">
        <p>소요시간</p>
        <input type="text" required {...dyeingTimeRegister} />
      </div>

      <div className="recordWriteMainFromDyeingHurt">
        <p>시술 후 상함 정도</p>
        <HurtLists hurt={hurt} setHurt={setHurt} />
      </div>
    </div>
  );
}

export default DyeingRecordForm;
