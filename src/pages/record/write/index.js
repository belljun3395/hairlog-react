import React, { useState } from "react";
import { useForm } from "react-hook-form";
import RecordBtn from "../../../component/record/write/RecordBtn";
import RecordWriteFrom from "../../../component/record/write/RecordWriteForm";
import HairlogHead from "../../../component/common/head/HairLogHead";
import { getRecordWriteUrl } from "../../../utils/GetURLProps";
import { getRecordWriteFetchProps } from "../../../utils/GetFetchProps";
import { getCookie } from "../../../utils/GetCookie";

function recordWrite(authCookie, category, data, hurt, date) {
  fetch(
    getRecordWriteUrl(category),
    getRecordWriteFetchProps(authCookie, data, category, hurt, date)
  ).then(() => {
    window.location.href = "/";
  });
}
function RecordWrite() {
  const [recordTypeState, setRecordTypeState] = useState("CUT");
  const [date, setDate] = useState("00:00:00");
  let [RecordHash, setRecordHash] = useState(1);
  let [hurt, setHurt] = useState("L");
  const { register, handleSubmit } = useForm();

  let authCookie = getCookie("hairlog_accessToken");
  if (authCookie === undefined) {
    window.location.href = "/login";
  }

  return (
    <form
      className="recordWriteForm"
      onSubmit={handleSubmit((data) =>
        recordWrite(authCookie, recordTypeState, data, hurt, date)
      )}
    >
      <HairlogHead />

      <RecordWriteFrom
        recordTypeState={recordTypeState}
        setRecordTypeState={setRecordTypeState}
        date={date}
        setDate={setDate}
        RecordHash={RecordHash}
        hurt={hurt}
        setHurt={setHurt}
        register={register}
      />

      <RecordBtn RecordHash={RecordHash} setRecordHash={setRecordHash} />
    </form>
  );
}

export default RecordWrite;
