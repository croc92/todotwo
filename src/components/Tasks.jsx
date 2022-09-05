import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  console.log("tasks: ", tasks);
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default Tasks;
