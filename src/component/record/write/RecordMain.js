import "./recordMain.css";
import React, { useState } from "react";
import { UseGetFetch } from "../../../hook/useFetch";
import DesignerList from "./designerList/DesignerList";
import DesignerPopUp from "../../record/write/designerPopUp/DesignerPopUp";
import RecordTypes from "./recordTypes/RecordTypes";
import RecordForm from "./reocrdForm/RecordForm";
import { getCookie } from "../../../utils/GetCookie";
import { GET_DESIGNERLIST_URL } from "../../../utils/GetURLProps";
import { getAuthHeader } from "../../../utils/GetFetchProps";

function RecordMain({
  recordTypeState,
  setRecordTypeState = (f) => f,
  date,
  setDate = (f) => f,
  RecordHash,
  hurt,
  setHurt = (f) => f,
  register = (f) => f,
}) {
  const [designerPopUp, setDesignerPopUp] = useState(false);

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

  if (RecordHash !== 1) {
    return "";
  } else {
    return (
      <div className="recordWriteMain">
        <div className="recordWriteRecordDate">
          <p>시술 날짜</p>
          <input type="date" onClick={(event) => setDate(event.target.value)} />
        </div>

        <div className="recordWriteRecordDesigners">
          <p className="recordWriteRecordDesignersHead">디자이너</p>
          <div className="recordWriteRecordDesignersList">
            <DesignerList
              data={data}
              register={{ ...register("designerId") }}
            />
          </div>
          <p
            className="recordWriteRecordDesignersAdd"
            onClick={() => setDesignerPopUp(true)}
          >
            +
          </p>
        </div>

        <DesignerPopUp
          designerPopUp={designerPopUp}
          setDesignerPopUp={setDesignerPopUp}
        />

        <div className="recordWriteMainCost">
          <p>비용</p>
          <input type="text" required {...register("recordCost")} />
        </div>

        <RecordTypes
          recordTypeState={{ recordTypeState }}
          setRecordType={setRecordTypeState}
        />

        <RecordForm
          recordTypeState={recordTypeState}
          hurt={hurt}
          setHurt={setHurt}
          register={register}
        />
      </div>
    );
  }
}

export default RecordMain;
