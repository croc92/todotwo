import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const [dueDatetime, setDueDatetime] = useState(
    new Date().toISOString().slice(0, -8)
  );

  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ title, dueDatetime, reminder });

    setTitle("");
    setDueDatetime(`${new Date().toISOString().slice(0, -8)}`);
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>
          Task <span style={{ color: "red", fontWeight: "bold" }}>*</span>
        </label>
        <input
          type="text"
          placeholder="task name"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>
          Select a Due <span style={{ fontSize: "0.7rem" }}>(or not)</span>
        </label>
        <input
          type="datetime-local"
          name="datetime"
          id="date"
          value={dueDatetime}
          onChange={(e) => setDueDatetime(e.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;

// const [dueDay, setDueDay] = useState(new Date().toISOString().split("T")[0]); // '2022-09-04'
// local format
// const [dueDay, setDueDay] = useState(dueDatetime.toLocaleDateString());

// // us format + 0 as first digit
// const [dueDay, setDueDay] = useState(
//   `${dueDatetime.getFullYear()}-${("0" + (dueDatetime.getMonth() + 1)).slice(
//     -2
//   )}-${("0" + dueDatetime.getDate()).slice(-2)}`
// );

// us format
// const [dueDay, setDueDay] = useState(
//   `${dueDatetime.getFullYear()}-${
//     dueDatetime.getMonth() + 1
//   }-${dueDatetime.getDate()}`
// );
// const [dueTime, setDueTime] = useState(
//   ("0" + new Date().getHours()).slice(-2) +
//     ":" +
//     ("0" + new Date().getMinutes()).slice(-2)
// );
// const [dueTime, setDueTime] = useState(
//   `${("0" + new Date().getHours()).slice(-2)}:${(
//     "0" + new Date().getMinutes()
//   ).slice(-2)}`
// );

// function that will concat Date & Time
// const concatDateTimeString = (date, time) => {
//   return `${date + "T" + time + ":00.000Z"}`;
// };

// const combinedDate = `${dueDay + "T" + dueTime + ":00.000Z"}`;
// setDueDatetime(combinedDate);

// setDueDatetime(`${concatDateTimeString(dueDay, dueTime)}`);
