import React from "react";

const numberTable = {
  0: "۰",
  1: "۱",
  2: "۲",
  3: "۳",
  4: "۴",
  5: "۵",
  6: "۶",
  7: "۷",
  8: "۸",
  9: "۹",
  ".": ""
};
export function toFaNum(num) {
  return num
    .toString()
    .split("")
    .map(n => numberTable[n])
    .join("");
}
export function FaNum({ num }) {
  return (
    <span dir="ltr">
      {num
        .toString()
        .split("")
        .map(n => numberTable[n])
        .join("")}
    </span>
  );
}
