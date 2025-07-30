import React, { useState } from "react";

const ROw1 = ({ onNewItem }) => {
  const [todoname, setTodoname] = useState("");
  const [tododate, setTododate] = useState("");

  const handleNameChange = (e) => {
    setTodoname(e.target.value);
  };

  const handleDateChange = (e) => {
    setTododate(e.target.value);
  };

  const handleAddClick = () => {
    onNewItem(todoname, tododate);
    setTododate("");
    setTodoname("");
  };

  return (
    <div>
      <div className="row">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter todo here..."
            onChange={handleNameChange}
            value={todoname}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={tododate} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleAddClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ROw1;
