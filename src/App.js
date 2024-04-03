import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {Outlet} from "react-router-dom";
import {ToastContainer} from "react-toastify";

export default class App extends React.Component {


    render() {
        return (
            <div className="geral">
                <header className="cabecalho">
                    <Navbar/>
                </header>
                <main className="conteudo">
                    <Outlet/>
                    <ToastContainer className="toast-position" newestOnTop={false}/>
                </main>
                <footer className="rodape">
                    <hr className="divisao-rodape"/>
                    <p className="link-github">Made by: <a
                        className="link-github" href="https://github.com/Ivanppf" target="_blank">Ivan Pinheiro</a></p>
                </footer>
            </div>
        );
    }
}



