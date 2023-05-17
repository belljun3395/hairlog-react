import "./designersList.css";
import React from "react";
import { UseGetFetch } from "../../hook/useFetch";
import Designer from "./Designer";
import { getCookie } from "../../utils/GetCookie";
import { GET_DESIGNERLIST_URL } from "../../utils/GetURLProps";
import { getAuthHeader } from "../../utils/GetFetchProps";
import { extractData } from "../../utils/ExtractData";

function DesignersList() {
  let authCookie = getCookie("hairlog_accessToken");
  if (authCookie === undefined) {
    window.location.href = "/login";
  }
  const { loading, data, error } = UseGetFetch(
    GET_DESIGNERLIST_URL,
    getAuthHeader(authCookie)
  );

  if (loading) return <h1> </h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  return (
    <div className="designerList">
      <h1>Deigner List</h1>
      {extractData(data).map((data) => (
        <Designer data={data} />
      ))}
    </div>
  );
}

export default DesignersList;
