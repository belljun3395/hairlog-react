import "./profile.css";
import { GET_MEMBERS_URL } from "../../utils/GetURLProps";
import React from "react";
import { UseGetFetch } from "../../hook/useFetch";
import { extractData } from "../../utils/ExtractData";
import { getAuthHeader } from "../../utils/GetFetchProps";
import { getCookie } from "../../utils/GetCookie";

function Profile() {
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
    <div className="myPage">
      <p className="myPageName">{extractData(data).name}</p>
      <p className="myPageEmail">{extractData(data).email}</p>
      <p className="myPageSex">{extractData(data).sex}</p>
    </div>
  );
}

export default Profile;
