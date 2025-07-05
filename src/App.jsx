import React from "react";
import Forms from "./components/Basics/Forms";
import Usestate from "./components/Basics/Usestate";
import UseEffect from "./components/Basics/UseEffect";
import Fechingdata from "./components/Basics/Fechingdata";
import Advancehooks from "./components/Basics/Advancehooks";
import Refhook from "./components/Basics/Refhook";
import States from "./components/Basics/States";
import Basics from "./components/Basics/Basics";
import Events from "./components/Basics/Events";
import Children from "./components/Basics/Children";
import Routes from "./Routes/routes";
import { Link } from "react-router-dom";
import Menu from "./components/Basics/Menu";
import CondRendering from "./components/Basics/CondRendering";
import AdvanceReact from "./components/Basics/AdvanceReact";
import Rendering from "./components/Basics/Rendering";
import Form2 from "./components/Basics/Form2";
import Forms3 from "./components/Basics/Forms3";
import Usestate1 from "./components/Basics/Usestate1";
import Usestate2 from "./components/Basics/Usestate2";
import Localstorage from "./components/Basics/Localstorage";
import Fecthingdata1 from "./components/Basics/Fecthingdata1";
import UseReducer from "./components/Basics/UseReducer";
import UseReducer2 from "./components/Basics/UseReducer2";
import UseRef from "./components/Basics/UseRef";
import Practice from "./components/Basics/Practice.jsx";
import Usercontext from "./components/Basics/Usercontext.jsx";
import Info from "./components/Basics/Info";

const App = () => {
  let studenthobbies = {
    first: "cricket",
    second: "footbal",
  };

  return (
    <div>
      <Menu />
      <div>
        <h1 className="text-xl font-bold px-6">Routing in React</h1>
        <ul className="flex gap-6 p-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <Routes />
      </div>
      <Children>
        <h1>Student info</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          itaque quo numquam rem eum recusandae eius rerum pariatur inventore
          laboriosam repellendus perferendis debitis non cumque, error
          asperiores molestias quam nesciunt?
        </p>
      </Children>
      <br />
      <br />
      <Basics studenthobbies={studenthobbies} />
      <br />
      <br />
      <Rendering />
      <br />
      <br />
      <Events />
      <br />
      <br />
      <Forms />
      <br />
      <br />
      <Form2 />
      <br />
      <br />
      <Forms3 />
      <br />
      <br />
      <Usestate />
      <br />
      <Usestate1 />
      <br />
      <Usestate2 />
      <br />
      <br />
      <UseEffect count={10} price={100} />
      <br />
      <br />
      <Localstorage />
      <br />
      <br />
      <Fechingdata />
      <br />
      <Fecthingdata1 />
      <br />
      <br />
      <Advancehooks />
      <br />
      <br />
      <Refhook />
      <br />
      <br />
      <States />
      <br />
      <br />
      <CondRendering />
      <br />
      <br />
      <AdvanceReact />
      <br />
      <br />
      <UseReducer />
      <br />
      <UseReducer2 />
      <br />
      <br />
      <UseRef />
      <br />
      <br />

      <Usercontext.Provider value={{ name: "Raees khan", age: 23 }}>
        <Practice />
        <Info />
      </Usercontext.Provider>
      <br />
      <br />
    </div>
  );
};

export default App;
