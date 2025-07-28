import React from "react";
import ProjectName from "./components/ProjectName";
import ROw1 from "./components/ROw1";
import TodoItems from "./components/TodoItems";

const App = () => {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "7/8/2025",
    },
    {
      name: "Go to college",
      dueDate: "7/8/2025",
    },
    {
      name: "Follow Me On Github",
      dueDate: "Right Now",
    },
  ];
  return (
    <div className="todo-container">
      <ProjectName />
      <ROw1 />
      <TodoItems todoItems={todoItems} />
    </div>
  );
};

export default App;
