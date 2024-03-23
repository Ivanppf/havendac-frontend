import React from 'react';
import './App.css';
import travel from '../src/assets/travel.svg'
import PropertyCreate from "./components/property/PropertyCreate";
import RoomCreate from "./components/room/RoomCreate";

export default class App extends React.Component {

    render() {
        return (
            <div className="geral">
                <header className="cabecalho">
                    <img width="40" height="40" src={travel} alt="icon"/>
                    <h1 className="texto-cabecalho">haven</h1>
                </header>
                <main className="conteudo">
                    {/*<PropertyCreate/>*/}
                    <RoomCreate/>
                </main>
                <hr/>
                <footer className="rodape">
                    <a href="https://github.com/Ivanppf" target="_blank">By: Ivanppf</a>
                </footer>
            </div>
        );
    }
}



