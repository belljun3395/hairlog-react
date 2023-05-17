import "./recordRead.css";
import React from "react";
import HairlogHead from "../../../component/common/head/HairLogHead";
import RecordReadBox from "../../../component/record/read/RecordReadBox";
import Navbar from "../../../component/common/navbar/Navbar";

function RecordRead() {
  return (
    <div className="recordRead">
      <HairlogHead />
      <button className="recordReadDeletBtn">삭제</button>
      <RecordReadBox />
      <Navbar />
    </div>
  );
}

export default RecordRead;
