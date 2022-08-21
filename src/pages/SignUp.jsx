import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container">
      <form className="add-form">
        <div className="form-control">
          <label>Name</label>
          <input type="text" />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input type="text" />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" />
        </div>
        <label>Not a member?</label>
        <Link to="../">
          {" "}
          <input
            type="submit"
            className="btn btn-block"
            value="Sign up"
            style={{ backgroundColor: "red" }}
          />
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
