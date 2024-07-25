import Card from "../../components/Card";
import "./Signin.css";

export default function Signin() {
  return (
    <Card title="Login">
      <div>
        <div>
          <label className="col-form-label mt-2 ms-2">
            Email
          </label>
          <input className="form-control" type="text" />
        </div>
        <div>
          <label className="col-form-label mt-2 ms-2">
            Password
          </label>
          <input className="form-control" type="password" />
        </div>
        <div className="div-button-property mt-2">
            <button className="btn btn-primary">Sign in</button>
        </div>
      </div>
    </Card>
  );
}
