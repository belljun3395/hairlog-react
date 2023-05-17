/* eslint-disable */
import "./welcome.css";
import React from "react";
import { UseGetFetch } from "../../hook/useFetch";
import { getCookie } from "../../utils/GetCookie";
import { GET_MEMBERS_URL } from "../../utils/GetURLProps";
import { getAuthHeader } from "../../utils/GetFetchProps";
import { extractData } from "../../utils/ExtractData";


function Welcome() {
  let authCookie = getCookie("hairlog_accessToken");
  if (authCookie === undefined) {
    window.location.href = "/login";
  }

  const { loading, data, error } = UseGetFetch(
    GET_MEMBERS_URL,
    getAuthHeader(authCookie)
  );

  if (loading) return <h1> </h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <div className="welcome">
      <div className="welcomeMent">
        <p>{extractData(data).name}님, 환영합니다!</p>
      </div>

      <button
        className="welcomeToMainBtn"
        onClick={() => (window.location.href = "/")}
      >
        Main page
      </button>
    </div>
  );
}

export default Welcome;
