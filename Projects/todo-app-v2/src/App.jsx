import React, { useState } from "react";
import ProjectName from "./components/ProjectName";
import ROw1 from "./components/ROw1";
import TodoItems from "./components/TodoItems";
import WelcMesg from "./components/WelcMesg";

const App = () => {
  const [todoItems, setToddoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new item added: ${itemName}, due date: ${itemDueDate}`);
    const newTodoItem = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setToddoItems(newTodoItem);
  };

  const handleDeleteItem = (todoname) => {
    const newTodoItem = todoItems.filter((item) => item.name !== todoname);
    setToddoItems(newTodoItem);
    console.log(`item deleted: ${todoItems}`);
  };

  return (
    <div className="todo-container">
      <ProjectName />
      <div className="todo-items">
        <ROw1 onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcMesg />}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </div>
    </div>
  );
};

export default App;
