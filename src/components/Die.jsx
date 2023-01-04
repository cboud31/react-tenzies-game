import React from "react";

const Die = (props) => {
  return (
    <div className="die">
      <span>{props.value}</span>
    </div>
  );
};

export default Die;
