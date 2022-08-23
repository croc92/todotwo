import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitUser = (e) => {
    e.preventDefault();

    onAddUser({ name, email, password });

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <form className="add-form" onSubmit={onSubmitUser}>
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* <Link to="../">
          {" "}
          <input
            type="submit"
            className="btn btn-block"
            value="Sign up"
            style={{ backgroundColor: "red" }}
          />
        </Link> */}

        <input
          type="submit"
          className="btn btn-block"
          value="Sign up"
          style={{ backgroundColor: "red" }}
        />
      </form>
    </div>
  );
};

export default SignUp;
