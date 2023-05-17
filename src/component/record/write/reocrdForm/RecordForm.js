import React from "react";
import CutRecordForm from "./CutRecordForm";
import PermRecordForm from "./PermRecordForm";
import DyeingRecordForm from "./DyeingRecordForm";

function RecordForm({
  recordTypeState,
  hurt,
  setHurt = (f) => f,
  register = (f) => f,
}) {
  if (recordTypeState === "CUT") {
    return (
      <CutRecordForm
        cutNameRegister={{ ...register("cutName") }}
        cutLengthRegister={{ ...register("cutLength") }}
      />
    );
  } else if (recordTypeState === "PERM") {
    return (
      <PermRecordForm
        permNameRegister={{ ...register("permName") }}
        permTimeRegister={{ ...register("permTime") }}
        hurt={hurt}
        setHurt={setHurt}
      />
    );
  } else if (recordTypeState === "DYEING") {
    return (
      <DyeingRecordForm
        dyeingColorRegister={{ ...register("dyeingColor") }}
        dyeingDecolorizationRegister={{ ...register("dyeingDecolorization") }}
        dyeingTimeRegister={{ ...register("dyeingTime") }}
        hurt={hurt}
        setHurt={setHurt}
      />
    );
  }
}

export default RecordForm;
