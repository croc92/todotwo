import React from "react";

const Button = ({ showAddTask, isShowing }) => {
  return (
    <button
      className="btn"
      onClick={showAddTask}
      style={{ backgroundColor: `${isShowing ? "red" : "green"}` }}
    >
      {`${isShowing ? "Close" : "Add"}`}
    </button>
  );
};

export default Button;
