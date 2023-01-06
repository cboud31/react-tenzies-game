import React from "react";

const Die = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return (
    <div className="die-face" style={styles}>
      <span>{props.value}</span>
    </div>
  );
};

export default Die;
