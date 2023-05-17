import "./designerPopUp.css";
import React, { useRef } from "react";
import { getCookie } from "../../../../utils/GetCookie";
import { getDesignerFetchProps } from "../../../../utils/GetFetchProps";
import { GET_DESIGNERLIST_URL } from "../../../../utils/GetURLProps";

function DesignerPopUp({ designerPopUp, setDesignerPopUp = (f) => f }) {
  const designerName = useRef();
  const designerSalon = useRef();
  if (designerPopUp === false) {
    return <></>;
  } else {
    return (
      <div className="popUp">
        <div className="recordWriteMainPopUp">
          <button
            className="recordWriteMainPopUpBack"
            onClick={() => setDesignerPopUp(false)}
          >
            ⬅
          </button>
          <button
            className="recordWriteMainPopUpPlus"
            onClick={() => {
              let data = {
                designerName: designerName.current.value,
                designerSalon: designerSalon.current.value,
              };
              let authCookie = getCookie("hairlog_accessToken");
              if (authCookie === undefined) {
                window.location.href = "/login";
              }
              fetch(GET_DESIGNERLIST_URL, getDesignerFetchProps(authCookie, data));
              setDesignerPopUp(false);
            }}
          >
            추가
          </button>
          <div className="recordWriteMainPopUpDesigner">
            <p>디자이너 :</p>
            <input type="text" ref={designerName} />
          </div>
          <div className="recordWriteMainPopUpSalon">
            <p>미용실 :</p>
            <input type="text" ref={designerSalon} />
          </div>
        </div>
      </div>
    );
  }
}

export default DesignerPopUp;
