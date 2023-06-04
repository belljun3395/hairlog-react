import "./recordRead.css";
import React from "react";
import HairlogHead from "../../../component/common/head/HairLogHead";
import RecordReadBox from "../../../component/record/read/RecordReadBox";
import Navbar from "../../../component/common/navbar/Navbar";
import { getRecordDeleteUrl } from "../../../utils/GetURLProps";
import { getRecordDeleteFetchProps } from "../../../utils/GetFetchProps";
import { getCookie } from "../../../utils/GetCookie";

function recordDelete(recordId, authCookie) {
  fetch(
    getRecordDeleteUrl(recordId),
    getRecordDeleteFetchProps(authCookie)
  ).then(() => {
    window.location.href = "/";
  });
}
function RecordRead() {
  let recordId = window.location.search
  .split("rid=")[1]
  .split("=")[0]
  .split("&")[0];

  let authCookie = getCookie("hairlog_accessToken");
  if (authCookie === undefined) {
    window.location.href = "/login";
  }
  return (
    <div className="recordRead">
      <HairlogHead />
      <button className="recordReadDeletBtn" onClick={()=> {recordDelete(recordId, authCookie)}}>삭제</button>
      <RecordReadBox />
      <Navbar />
    </div>
  );
}

export default RecordRead;
