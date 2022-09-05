import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  const dueDate = new Date(task.dueDatetime);
  // const dueDateFirstRow = `${dueDate.getFullYear()}-${
  //   dueDate.getMonth() + 1
  // }-${dueDate.getDay()}`;
  // const dueDateSecondRow = `${dueDate.getHours()}:${dueDate.getMinutes()}`;
  const dueDatePartOne = `${dueDate.toISOString().split("T")[0]}`;
  const dueDatePartTwo = `${("0" + dueDate.getHours()).slice(-2)}:${(
    "0" + dueDate.getMinutes()
  ).slice(-2)}`;

  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.title}
        <FaTimes onClick={() => onDelete(task.id)} />
      </h3>
      <p>{dueDatePartOne}</p>
      <p>{dueDatePartTwo}</p>
    </div>
  );
};

export default Task;
