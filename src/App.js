import React from 'react';
import './App.css';

export default class App extends React.Component {
    render() {
        return (
            //     <div className="geral">
            //         <header className="cabecalho">
            //             <h1>header</h1>
            //         </header>
            //         <main className="conteudo">
            //             <div className="div-campos">
            //                 <input type="checkbox"/>
            //                 <label>is available</label>
            //                 <br/>
            //                 <input type="checkbox"/>
            //                 <label>is countryside</label>
            //                 <br/>
            //                 <input type="checkbox"/>
            //                 <label>has swimmingPool</label>
            //                 <br/>
            //                 <label>type</label>
            //                 <br/>
            //                 <select>
            //                     <option value="APARTMENT">Apartment</option>
            //                     <option value="HOUSE">House</option>
            //                     <option value="BEDROOM">Bedroom</option>
            //                     <option value="CABIN">Cabin</option>
            //                     <option value="BED_N_BREAKFASTS">Bed & Breakfasts</option>
            //                     <option value="FARM">Farm</option>
            //                 </select>
            //                 <br/>
            //                 <label>description</label>
            //                 <br/>
            //                 <input type="text"/>
            //             </div>
            //         </main>
            //         <footer className="rodape">
            //             <h1>footer</h1>
            //         </footer>
            //     </div>

            <div className="geral">
                <header className="cabecalho">
                    <h1>header</h1>
                </header>
                <main className="conteudo">
                    <div>
                        <h1 className="titulo">Room</h1>
                    </div>
                    <div className="div-campos">
                        <label>width</label>
                        <br/>
                        <input type="text"/>
                        <br/>
                        <label>length</label>
                        <br/>
                        <input type="text"/>
                        <br/>
                        <label>property id</label>
                        <br/>
                        <input type="text"/>
                    </div>
                </main>
                <footer className="rodape">
                    <h1>footer</h1>
                </footer>
            </div>
        );
    }
}

