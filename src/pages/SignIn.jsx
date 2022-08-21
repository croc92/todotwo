import { Link } from "react-router-dom";

const SignIn = ({ onShow }) => {
  return (
    <div className="container">
      <form className="add-form">
        <div className="form-control">
          <label>Email</label>
          <input type="text" />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" />
        </div>
        <Link to="/list">
          <input type="submit" className="btn btn-block" value="Sign in" />
        </Link>

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
