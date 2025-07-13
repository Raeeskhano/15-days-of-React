import React from "react";
import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <div className="todo-container">
      {todoItems.map((item) => (
        <TodoItem todoname={item.name} tododate={item.dueDate} />
      ))}
    </div>
  );
};

export default TodoItems;
