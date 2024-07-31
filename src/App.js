import React, { useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AuthenticationAPIService from "./service/AuthenticationAPIService";
import SessionProvider from "./main/SessionProvider";
import { AuthContext } from "./main/SessionProvider";

export default class App extends React.Component {
  service = new AuthenticationAPIService();
  user = this.service.getLoggedUser();

  getNickname = () => {
    let nickname = "signin";
    if (this.user !== undefined) {
    nickname = this.user.nickname;
    }
    return nickname;
  };

  render() {
    return (
      <SessionProvider>
        <div className="geral">
          <header className="cabecalho">
            <Navbar nickname={this.getNickname()} />
          </header>
          <main className="conteudo">
            <Outlet />
            <ToastContainer className="toast-position" newestOnTop={false} />
          </main>
          <footer className="rodape">
            <hr className="divisao-rodape" />
            <p className="link-github">
              Made by:{" "}
              <a
                className="link-github"
                href="https://github.com/Ivanppf"
                target="_blank"
              >
                Ivan Pinheiro
              </a>
            </p>
          </footer>
        </div>
      </SessionProvider>
    );
  }
}
