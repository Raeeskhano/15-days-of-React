import React from "react";
import style from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <div>
      <input
        type="text"
        className={style.display}
        readOnly
        value={displayValue}
      />
    </div>
  );
};

export default Display;
