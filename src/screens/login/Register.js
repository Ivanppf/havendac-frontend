import Card from "../../components/Card";
import "./Register.css";

export default function Signup() {
  return (
    <Card>
      <div className="divtitulo">
        <h1 className="titulo text-primary">Register</h1>
      </div>
      <div className="grid-div">
        <div>
          <label className="col-form-label mt-2 ms-2">Name</label>
          <input className="form-control" type="text" />
        </div>
        <div>
          <label className="col-form-label mt-2 ms-2">Username</label>
          <input className="form-control" type="text" />
        </div>
        <div>
          <label className="col-form-label mt-2 ms-2">Email</label>
          <input className="form-control" type="text" />
        </div>
        <div>
          <label className="col-form-label mt-2 ms-2">Password</label>
          <input className="form-control" type="password" />
        </div>
        <div>
          <label className="col-form-label mt-2 ms-2">Confirm Password</label>
          <input className="form-control" type="password" />
        </div>
        <div className="div-button-property mt-2">
          <button className="btn btn-primary">Sign in</button>
        </div>
      </div>
      <div />
    </Card>
  );
}
