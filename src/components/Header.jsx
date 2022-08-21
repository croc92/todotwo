import React from "react";
import Button from "./Button";

const Header = ({ showAddTask, isShowing }) => {
  return (
    <header className="header">
      <h2
        style={
          {
            // color: "green",
            // borderBottom: "1px solid steelblue",
          }
        }
      >
        Your List
      </h2>
      <Button showAddTask={showAddTask} isShowing={isShowing} />
    </header>
  );
};

export default Header;
