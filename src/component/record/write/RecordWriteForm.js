import React from "react";
import RecordMain from "./RecordMain";
import RecordEtc from "./RecordEtc";
import SatisfactionForm from "./SatisfactionForm";

function RecordWriteForm({
  RecordHash,
  recordTypeState,
  setRecordTypeState = (f) => f,
  date,
  setDate = (f) => f,
  hurt,
  setHurt = (f) => f,
  register = (f) => f,
}) {
  if (RecordHash === 1) {
    return (
      <RecordMain
        recordTypeState={recordTypeState}
        setRecordTypeState={setRecordTypeState}
        date={date}
        setDate={setDate}
        RecordHash={RecordHash}
        hurt={hurt}
        setHurt={setHurt}
        register={register}
      />
    );
  } else if (RecordHash === 2) {
    return (
      <>
        <RecordEtc
          RecordHash={RecordHash}
          recordEtcRegiseter={{ ...register("recordEtc") }}
        />

        <SatisfactionForm
          RecordHash={RecordHash}
          satisfactionRegister={{ ...register("satisfaction") }}
        />
      </>
    );
  }
}

export default RecordWriteForm;
