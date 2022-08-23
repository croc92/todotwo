import { Link } from "react-router-dom";
// import { useState } from "react";

const SignIn = ({ onShow, user, onSetUser, onLogUser, errorMsg }) => {
  // const [user,setUser] bu componentten globale cekip, baska sekilde yaklasim; fonk.u disarda yazip, form icinde sadece cagirmak:
  const handleEmailChange = (e) => {
    onSetUser({ ...user, email: e.target.value });
  };
  const handlePasswordChange = (e) => {
    onSetUser({ ...user, password: e.target.value });
  };

  // const logUserIn = (e) => {
  //   // e.preventDefault();

  //   if (userAdmin.email == user.email && userAdmin.password == user.password) {
  //     // store in localStorage
  //     console.log("signed in", user);
  //     localStorage.setItem("user-key", JSON.stringify(user));
  //   } else {
  //     console.log("no such user");
  //   }
  // };

  return (
    <div className="container">
      <form className="add-form" onSubmit={onLogUser}>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            value={user.email}
            // onChange={(e) => setUser({ ...user, email: e.target.value })}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            value={user.password}
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
