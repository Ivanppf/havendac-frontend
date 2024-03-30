import React from "react";
import './propertyCreate.css';
import Card from "../../components/Card";
import {post} from "../../service/RequestService";
import {useLocation} from "react-router-dom";

export default class PropertyCreate extends React.Component {

    apiUrl = "http://localhost:8080/api/properties"

    state = {
        isAvailable: false,
        isCountryside: false,
        hasSwimmingPool: false,
        type: "",
        description: ""
    }
    options = [
        {label: "Apartment", value: "APARTMENT"},
        {label: "House", value: "HOUSE"},
        {label: "Bedroom", value: "BEDROOM"},
        {label: "Cabin", value: "CABIN"},
        {label: "Bed & Breakfasts", value: "BED_N_BREAKFASTS"},
        {label: "Farm", value: "FARM"}
    ]

    register = () => {
        post(this.apiUrl, this.state)
    }

    render() {
        return (
            <Card className="div-cadastro-property" title="Property">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value={this.state.isAvailable.toString()}
                           onChange={e => this.setState({isAvailable: e.target.checked})} id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        is available
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value={this.state.isCountryside.toString()}
                           onChange={e => this.setState({isCountryside: e.target.checked})}
                           id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        is countryside
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"
                           value={this.state.hasSwimmingPool.toString()}
                           onChange={e => this.setState({hasSwimmingPool: e.target.checked})}
                           id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        has swimming pool
                    </label>
                </div>
                <br/>
                <div>
                    <select className="form-select" id="exampleSelect1" onChange={e => {
                        this.setState({type: e.target.value})
                    }}>
                        <option hidden selected>Select a type</option>
                        {this.options.map(({value, label}) => (
                            <option key={value} value={value}>{label}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="col-form-label mt-2 ms-2" htmlFor="textareaDescription">description:</label>
                    <textarea className="form-control" placeholder="Default input" id="textareaDescription"
                              onChange={e => this.setState({description: e.target.value})}
                              maxLength="250" rows="3"/>
                </div>
                <div className="div-button-property mt-2">
                    <button className="btn btn-primary" onClick={this.register}>Send</button>
                </div>
            </Card>
        )
    }
}