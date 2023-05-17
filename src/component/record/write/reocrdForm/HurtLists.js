import "./hurtLists.css";
import React from "react";
import HurtList from "./HurtList";

const HURT_HIGH = { kor: "상", eng: "H" };
const HURT_MIDIUM = { kor: "중", eng: "M" };
const HURT_LOW = { kor: "하", eng: "L" };
const HURTLISTS = [HURT_HIGH, HURT_MIDIUM, HURT_LOW];
function isSelected(value, selectedHurt) {
  let selected;
  if (value === selectedHurt) {
    selected = " selected";
  }
  return selected;
}
function HurtLists({ hurt, setHurt = (f) => f }) {
  return (
    <ul>
      {HURTLISTS.map((hurtlist, index) => {
        return (
          <HurtList
            key={index}
            value={hurtlist.kor}
            className={"hurtList " + isSelected(hurtlist.eng, hurt)}
            onClick={() => setHurt(hurtlist.eng)}
          />
        );
      })}
    </ul>
  );
}

export default HurtLists;
