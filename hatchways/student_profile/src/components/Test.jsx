import React from "react";

const Test = ({ id,grade }) => {
  return (
    <div>
      Test{id} &nbsp;&nbsp;<span>{grade}% </span> 
    </div>
  );
};

export default Test;