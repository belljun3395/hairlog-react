import "./content.css";
import React, { useState } from "react";
import Filters from "../home/filters/Filters";
import { UseGetFetch } from "../../hook/useFetch";
import RecordBoxes from "./RecordBoxes/RecordBoxes";
import { getCookie } from "../../utils/GetCookie";
import { getRecordsPagesURL } from "../../utils/GetURLProps";
import { getAuthHeader } from "../../utils/GetFetchProps";
import { extractData } from "../../utils/ExtractData";

const [LATESTIDX, CUTIDX, PERMIDX, DYEINGIDX] = [0, 1, 2, 3];
function chooseCategory(selectedIndex) {
  if (selectedIndex === LATESTIDX) {
    return undefined;
  } else if (selectedIndex === CUTIDX) {
    return "cut";
  } else if (selectedIndex === PERMIDX) {
    return "perm";
  } else if (selectedIndex === DYEINGIDX) {
    return "dyeing";
  }
}
function Content() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const category = chooseCategory(selectedIndex);
  const [page] = useState(0);

  const authCookie = getCookie("hairlog_accessToken");
  if (authCookie === undefined) {
    window.location.href = "/login";
  }

  const { loading, data, error } = UseGetFetch(
    getRecordsPagesURL(category, page),
    getAuthHeader(authCookie)
  );

  if (loading) return <h1> </h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  return (
    <div className="homeContent">
      <div className="homeFilters">
        <Filters setSelectedIndex={setSelectedIndex} />
      </div>
      <div className="homeRecordBoxes">
        <RecordBoxes data={extractData(data).data} />
      </div>
    </div>
  );
}

export default Content;
