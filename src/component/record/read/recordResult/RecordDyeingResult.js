import React from "react";

function RecordDyeingResult({ data }) {
  return (
    <>
      <p className="recordReadResultDyeingColor">
        {"염색 색상 : " + data.dyeingColor}
      </p>
      <p className="recordReadResultDyeingDecolorization">
        {"염색 탈색 : " + data.dyeingDecolorization}
      </p>
      <p className="recordReadResultDyeingTime">
        {"염색 시간 : " + data.dyeingTime}
      </p>
      <p className="recordReadResultDyeingHurt">
        {"염색 손상 : " + data.dyeingHurt}
      </p>
    </>
  );
}

export default RecordDyeingResult;
