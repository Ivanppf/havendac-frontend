import Card from "../../components/Card";
import { useState } from "react";
import "./Register.css";
import { notifyWarning } from "../../components/Toastify";
import RegisterService from "../../service/RegisterService";

export default function Register() {
  const registerService = new RegisterService();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [name, setName] = useState("");
  let [nickname, setNickname] = useState("");

  const validate = () => {
    const errors = [];
    if (!name || name.trim().length < 1) {
      errors.push("Please, type a name");
    } else if (!nickname || nickname.trim().length < 1) {
      errors.push("Please, type an nickname");
    } else if (!email || email.trim().length < 1) {
      errors.push("Please, type an email");
    } else if (!password || password.trim().length < 1) {
      errors.push("Please, type a password");
    } else if (!confirmPassword || confirmPassword.trim().length < 1) {
      errors.push("Please, confirm password");
    } else if (password != confirmPassword) {
      errors.push("The passwords are different");
    }
    return errors;
  };

  function register() {
    const errors = validate();

    if (errors.length > 0) {
      errors.forEach((message, index) => {
        notifyWarning(message);
      });
    } else {
      const user = {
        name: name,
        nickname: nickname,
        email: email,
        password: password,
      };
      registerService.register(user);
    }
  }

  return (
    <Card>
      <div className="divtitulo">
        <h1 className="titulo text-primary">Register</h1>
      </div>
      <div className="grid-div">
        <div>
          <label className="col-form-label mt-2 ms-2">Name</label>
          <input
            className="form-control"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="col-form-label mt-2 ms-2">Nickname</label>
          <input
            className="form-control"
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div>
          <label className="col-form-label mt-2 ms-2">Email</label>
          <input
            className="form-control"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="col-form-label mt-2 ms-2">Password</label>
          <input
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <div>
          <label className="col-form-label mt-2 ms-2">Confirm Password</label>
          <input
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
          />
        </div>
        <div className="div-button-register mt-2">
          <button className="btn btn-primary" onClick={register}>
            Sign in
          </button>
        </div>
      </div>
      <div />
    </Card>
  );
}
