import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className="todo-container">
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoname={item.name}
          tododate={item.dueDate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
