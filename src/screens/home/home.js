import React from "react";
import { useHistory } from "react-router-dom";
import "./home.css";
import { AuthContext } from "../../main/SessionProvider";
import { useContext } from "react";

export default function Home() {

    const data = useContext(AuthContext);

function logged() {
    return data.loggedUser === undefined
}


  return (
    <div className="home-container">
      <h1>Welcome to Haven</h1>
      <p>Your portal to rent properties quickly and securely</p>
      {logged() && (
      <div className="button-container">
        <a href="/signin" className="btn btn-login">
          Sign in
        </a>
        <a href="/register" className="btn btn-register">
          Register
        </a>
      </div>
      )}
    </div>
  );
}
