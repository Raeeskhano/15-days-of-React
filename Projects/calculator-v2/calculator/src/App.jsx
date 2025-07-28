import BtnContainer from "./components/BtnContainer";
import Display from "./components/Display";
import style from "./App.module.css";
import style1 from "./Main.module.css";
import { useState } from "react";

function App() {
  const [calVal, setcalVal] = useState("");
  const onButtonClick = (buttonText) => {
    console.log(buttonText);
    if (buttonText === "C") {
      setcalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setcalVal(result);
    } else {
      setcalVal((prev) => (prev === "" ? buttonText : prev + buttonText));
    }
  };
  return (
    <section className={style1.main}>
      <div className={style.calculator}>
        <Display displayValue={calVal} />
        <BtnContainer onButtonClick={onButtonClick} />
      </div>
    </section>
  );
}

export default App;
