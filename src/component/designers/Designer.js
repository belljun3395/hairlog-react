import React from "react";

function Designer({ data }) {
  return (
    <p className="designersListDesigner">
      <p className="designersListDesignerName">{data.designerName}</p>
      <p className="designersListDesignerSalon">{data.designerSalon}</p>
    </p>
  );
}

export default Designer;
