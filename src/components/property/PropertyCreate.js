import React from "react";

export default class PropertyCreate extends React.Component {

    state = {
        isAvailable: false,
        isCountryside: false,
        hasSwimmingPool: false,
        type: "",
        description: ""
    }

    register = () => {
        console.log(JSON.stringify(this.state))
    }

    render() {
        return (
            <>
                <div className="div-cadastro">
                    <h1 className="titulo">Property</h1>
                    <input value={this.state.isAvailable.toString()}
                           onChange={e => this.setState({isAvailable: e.target.checked})}
                           type="checkbox"/>
                    <label>is available</label>
                    <br/>
                    <input value={this.state.isCountryside.toString()}
                           onChange={e => this.setState({isCountryside: e.target.checked})}
                           type="checkbox"/>
                    <label>is countryside</label>
                    <br/>
                    <input value={this.state.hasSwimmingPool.toString()}
                           onChange={e => this.setState({hasSwimmingPool: e.target.checked})} type="checkbox"/>
                    <label>has swimming pool</label>
                    <br/>
                    <label>type</label>
                    <br/>
                    <select onChange={e => this.setState({type: e.target.value})}>
                        <option hidden selected>Select a type</option>
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
                    <textarea onChange={e => this.setState({description: e.target.value})} maxLength="1000" rows="3"
                              className="campo-descricao"/>
                </div>
                <button onClick={this.register}>Send</button>
            </>
        )
    }
}