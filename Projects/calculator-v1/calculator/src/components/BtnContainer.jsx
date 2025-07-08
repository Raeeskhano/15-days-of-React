import React from "react";
import style from "./BtnContainer.module.css";
const BtnContainer = () => {
  const ButtonsName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={style.BtnContainer}>
      {ButtonsName.map((item, index) => (
        <button key={index} className={style.Btn}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default BtnContainer;
