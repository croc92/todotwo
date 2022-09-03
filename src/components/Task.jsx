import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  const dueDate = new Date(task.dueDatetime);
  const dueDateFirstRow = `${dueDate.getFullYear()}-${
    dueDate.getMonth() + 1
  }-${dueDate.getDay()}`;

  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.title}
        <FaTimes onClick={() => onDelete(task.id)} />
      </h3>
      <p>{dueDateFirstRow}</p>
      <p>{task.dueTime}</p>
    </div>
  );
};

export default Task;
