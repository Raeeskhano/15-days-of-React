import React from "react";

const CondRendering = () => {
  const summer = true;
  return (
    <div>
      {summer ? <h1>lets go to beach</h1> : <h1>stay home and watch tv</h1>}
    </div>
  );
};

export default CondRendering;
