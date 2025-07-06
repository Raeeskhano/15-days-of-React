import React from "react";
import ProjectName from "./components/ProjectName";
import ROw1 from "./components/ROw1";
import Row2 from "./components/Row2";
import Row3 from "./components/Row3";

const App = () => {
  return (
    <div className="todo-container">
      <ProjectName />
      <ROw1 />
      <Row2 />
      <Row3 />
    </div>
  );
};

export default App;
