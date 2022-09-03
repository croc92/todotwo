import { Link } from "react-router-dom";
// import { useState } from "react";

const SignIn = ({
  onShow,
  username,
  password,
  onSetUsername,
  onSetPassword,
  onLogUser,
  errorMsg,
}) => {
  const handleUsernameChange = (e) => {
    onSetUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    onSetPassword(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onLogUser(username, password);
  };

  return (
    <div className="container">
      <form className="add-form" onSubmit={onFormSubmit}>
        <div className="form-control">
          <label>Username</label>
          <input
            type="text"
            value={username}
            // onChange={(e) => setUser({ ...user, email: e.target.value })}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            value={password}
            // onChange={(e) => setUser({ ...user, password: e.target.value })}
            onChange={handlePasswordChange}
          />
        </div>
        {/* <Link to="/list">
          <input type="submit" className="btn btn-block" value="Sign in" />
        </Link> */}
        <input type="submit" className="btn btn-block" value="Sign in" />
        <p style={{ color: "red" }}>{errorMsg}</p>

        <label>Not a member?</label>

        <Link to="/SignUp">
          <input
            type="submit"
            className="btn btn-block"
            value="Sign up"
            style={{ backgroundColor: "red" }}
            onClick={onShow}
          />
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
