import "./designerLists.css";
import React from "react";
import Designer from "./Designer";
import { extractData } from "../../../../utils/ExtractData";

function DesignerList({ data, register = (f) => f }) {
  return (
    <select className="designerListSelect" {...register}>
      {extractData(data).map((designer, index) => (
        <Designer
          key={index}
          value={designer.id}
          designerName={designer.designerName}
        />
      ))}
    </select>
  );
}

export default DesignerList;
