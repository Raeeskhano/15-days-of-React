import React from "react";

const TodoItem = ({ todoname, tododate }) => {
  return (
    <div className="row">
      <div className="col-4">{todoname}</div>
      <div className="col-4">{tododate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
