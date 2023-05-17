import "./recordReadBox.css";
import React from "react";
import RecordBaseResult from "./recordResult/RecordBaseResult";
import RecordResult from "./recordResult/RecordResult";
import { UseGetFetch } from "../../../hook/useFetch";
import { getCookie } from "../../../utils/GetCookie";
import { getRecordURL } from "../../../utils/GetURLProps";
import { getAuthHeader } from "../../../utils/GetFetchProps";
import { extractData } from "../../../utils/ExtractData";

function RecordReadBox() {
  let recordId = window.location.search
    .split("rid=")[1]
    .split("=")[0]
    .split("&")[0];
  let category = window.location.search.split("&c=")[1];

  let authCookie = getCookie("hairlog_accessToken");
  if (authCookie === undefined) {
    window.location.href = "/login";
  }
  const { loading, data, error } = UseGetFetch(
    getRecordURL(recordId, category),
    getAuthHeader(authCookie)
  );
  if (loading) return <h1> </h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  return (
    <div className="recordReadBox">
      <RecordBaseResult data={extractData(data)} />
      <RecordResult category={category} data={extractData(data)} />
    </div>
  );
}

export default RecordReadBox;
