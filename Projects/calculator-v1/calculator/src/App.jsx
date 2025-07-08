
import BtnContainer from "./components/BtnContainer";
import Display from "./components/Display";
import style from "./App.module.css";
function App() {
  return (
    <div className={style.calculator}>
      <Display />
      <BtnContainer />
    </div>
  );
}

export default App;
