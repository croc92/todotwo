import { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [reminder, setReminder] = useState(false);
  const [dueDate, setDueDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [dueTime, setDueTime] = useState(
    new Date().getHours() + ":" + new Date().getMinutes()
  );

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ text, dueDate, dueTime, reminder });

    setText("");
    setDueDate(new Date().toISOString().split("T")[0]);
    setDueTime(new Date().getHours() + ":" + new Date().getMinutes());
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
          value={text}
          required
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>
          Select a Due <span style={{ fontSize: "0.7rem" }}>(or not)</span>
        </label>
        <input
          type="date"
          name="date"
          id="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <input
          type="time"
          name="time"
          id="time"
          value={dueTime}
          onChange={(e) => setDueTime(e.target.value)}
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
