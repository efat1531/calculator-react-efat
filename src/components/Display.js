import React from "react";

const display = ({ displayValue }) => {
  return (
    <div className="displayDiv">
      <input type="text" id="display" value={displayValue} disabled />
    </div>
  );
};

export default display;
