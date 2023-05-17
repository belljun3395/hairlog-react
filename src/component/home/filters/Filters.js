import "./filter.css";
import Filter from "./Filter";
import React, { useState } from "react";

const SELECTED = "selected";
const NOTSELECTED = "NotSelected";
const FILTERCOUNT = 4;
const LATESTIDX = 0;
const filterList = [
  { filterClassName: "latestFilter", filterName: "최신순" },
  { filterClassName: "cutFilter", filterName: "컷" },
  { filterClassName: "permFilter ", filterName: "펌" },
  { filterClassName: "dyeingFilter", filterName: "염색" },
];
function Filters({ setSelectedIndex = (f) => f }) {
  let initialSelectList = Array(FILTERCOUNT).fill(NOTSELECTED);
  initialSelectList[LATESTIDX] = SELECTED;
  let [selectedList, setSelectedList] = useState(initialSelectList);

  function filterClick(index) {
    setSelectedIndex(index);
    setSelectedList(() => {
      let newSelecteindexs = Array(FILTERCOUNT).fill(NOTSELECTED);
      newSelecteindexs[index] = SELECTED;
      return newSelecteindexs;
    });
  }

  return (
    <>
      {filterList.map((filter, index) => (
        <Filter
          key={index}
          value={filter.filterName}
          filterClick={() => filterClick(index)}
          className={["filter", `${selectedList[index]}`].join(" ")}
        />
      ))}
    </>
  );
}

export default Filters;
