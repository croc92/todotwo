import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const [date, setDate] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="task name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day</label>
        <input
          type="text"
          placeholder="task day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      {/* date picker */}
      <div className="form-control">
        <label>Select a Date</label>
        <DatePicker selected={date} onChange={(e) => setDate(e)} />
      </div>
      {/* date picker */}

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
