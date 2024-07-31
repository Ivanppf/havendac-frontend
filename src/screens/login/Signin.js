import { useState } from "react";
import Card from "../../components/Card";
import AuthenticationAPIService from "../../service/AuthenticationAPIService";
import "./Signin.css";
import { notifySuccess, notifyWarning } from "../../components/Toastify";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const authenticationAPIService = new AuthenticationAPIService();
  const navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const validate = () => {
    const errors = [];
    if (!email || email.trim().length < 1) {
      errors.push("Please, type an email");
    } else if (!password || password.trim().length < 1) {
      errors.push("Please, type a password");
    }
    return errors;
  };

  function login() {
    const errors = validate();
    if (errors.length > 0) {
      errors.forEach((message, index) => {
        notifyWarning(message);
      });
    } else {
      const userCredentials = {
        email: email,
        password: password,
      };
      authenticationAPIService.login(userCredentials);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }

  return (
    <Card title="Login">
      <div>
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
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="div-button-property mt-2">
          <button className="btn btn-primary" onClick={login}>
            Sign in
          </button>
        </div>
      </div>
    </Card>
  );
}
