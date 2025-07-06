import React from "react";

const ROw1 = () => {
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <input type="text" placeholder="Enter todo here..." />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ROw1;
