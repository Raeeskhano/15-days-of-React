import React from "react";

const TodoItem = ({ todoname, tododate, onDeleteClick }) => {
  return (
    <div className="row">
      <div className="col-4">{todoname}</div>
      <div className="col-4">{tododate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            onDeleteClick(todoname);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
