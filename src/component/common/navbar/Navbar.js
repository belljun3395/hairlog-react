/* eslint-disable */
import "./navbar.css";
import plusButtonImg from "../../../asset/imgs/plus2.png";
import designerImg from "../../../asset/imgs/designer.png";
import mypageImg from "../../../asset/imgs/mypage.png";
import React from "react";

function navClick(location) {
  return (window.location.href = location);
}
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarProps">
        <div className="plusBtnShadow" />
        <div className="plusBtn" onClick={() => navClick("/record")}>
          <img src={plusButtonImg} />
        </div>
        <div className="designerBtn" onClick={() => navClick("/designers")}>
          <img src={designerImg} />
          <p className="navbarPropValue">디자이너 목록</p>
        </div>
        <div className="mypageBtn" onClick={() => navClick("/mypage")}>
          <img src={mypageImg} />
          <p className="navbarPropValue">마이페이지</p>
        </div>
        <div className="navDock"></div>
      </div>
    </div>
  );
}

export default Navbar;
