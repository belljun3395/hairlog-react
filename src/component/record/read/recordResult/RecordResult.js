import React from "react";
import RecordCutResult from "./RecordCutResult";
import RecordPermResult from "./RecordPermResult";
import RecordDyeingResult from "./RecordDyeingResult";

function RecordCategoryResult({ category, data }) {
  if (category === "CUT") {
    return <RecordCutResult data={data} />;
  } else if (category === "PERM") {
    return <RecordPermResult data={data} />;
  } else if (category === "DYEING") {
    return <RecordDyeingResult data={data} />;
  }
}

export default RecordCategoryResult;
