import React from 'react';
import './App.css';
import travel from '../src/assets/travel.svg'

export default class App extends React.Component {
    render() {
        return (
            <div className="geral">
                <header className="cabecalho">
                    <img width="40" height="40" src={travel} alt="icon"/>
                    <h1 className="texto-cabecalho">haven</h1>
                </header>
                <main className="conteudo">
                    {/*<div className="div-cadastro">*/}
                    {/*    <h1 className="titulo">Room</h1>*/}
                    {/*    <label>length</label>*/}
                    {/*    <br/>*/}
                    {/*    <input type="number"/>*/}
                    {/*    <br/>*/}
                    {/*    <label>width</label>*/}
                    {/*    <br/>*/}
                    {/*    <input type="number"/>*/}
                    {/*    <br/>*/}
                    {/*    <label>property id</label>*/}
                    {/*    <br/>*/}
                    {/*    <input type="number"/>*/}
                    {/*</div>*/}

                    <div className="div-cadastro">
                        <h1 className="titulo">Property</h1>
                        <input type="checkbox"/>
                        <label>is available</label>
                        <br/>
                        <input type="checkbox"/>
                        <label>is countryside</label>
                        <br/>
                        <input type="checkbox"/>
                        <label>has swimming pool</label>
                        <br/>
                        <label>type</label>
                        <br/>
                        <select>
                            <option value="APARTMENT">Apartment</option>
                            <option value="HOUSE">House</option>
                            <option value="BEDROOM">Bedroom</option>
                            <option value="CABIN">Cabin</option>
                            <option value="BED_N_BREAKFASTS">Bed & Breakfasts</option>
                            <option value="FARM">Farm</option>
                        </select>
                        <br/>
                        <label>description:</label>
                        <br/>
                        <textarea maxLength="1000" rows="3" className="campo-descricao"/>
                    </div>
                </main>
                <hr/>
                <footer className="rodape">
                    <a href="https://github.com/Ivanppf" target="_blank">By: Ivanppf</a>
                </footer>
            </div>
        );
    }
}

