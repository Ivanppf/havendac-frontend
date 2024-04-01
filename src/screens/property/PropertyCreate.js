import React, {useState} from "react";
import './propertyCreate.css';
import Card from "../../components/Card";
import {useLocation} from "react-router-dom";
import {post, update} from "../../service/RequestService";

export default function PropertyCreate() {

    const apiUrl = "http://localhost:8080/api/properties"

    let [isAvailable, setIsAvailable] = useState(false)
    let [isCountryside, setIsCountryside] = useState(false)
    let [hasSwimmingPool, setHasSwimmingPool] = useState(false)
    let [type, setType] = useState("")
    let [description, setDescription] = useState("")


    const options = [
        {label: "Apartment", value: "APARTMENT"},
        {label: "House", value: "HOUSE"},
        {label: "Bedroom", value: "BEDROOM"},
        {label: "Cabin", value: "CABIN"},
        {label: "Bed & Breakfasts", value: "BED_N_BREAKFASTS"},
        {label: "Farm", value: "FARM"}
    ]

    const data = useLocation();

    function register() {
        const property = {
            isAvailable: isAvailable,
            isCountryside: isCountryside,
            hasSwimmingPool: hasSwimmingPool,
            type: type,
            description: description
        }
        if (data.state != null) {
            update(apiUrl, data.state.id, property)
        } else {
            post(apiUrl, property)
        }
    }

    function loadUpdateData() {
        setIsAvailable(data.state.isAvailable)
        setIsCountryside(data.state.isCountryside)
        setHasSwimmingPool(data.state.hasSwimmingPool)
        setType(data.state.type)
        setDescription(data.state.description)
    }

    const [constructorHasRun, setConstructorHasRun] = useState(false);
    const constructor = () => {
        if (constructorHasRun) return;
        if (data.state != null) {
            loadUpdateData();
        }
        setConstructorHasRun(true);
    };
    constructor()

    return (
        <Card className="div-cadastro-property" title="Property" register={register}>
            <div className="form-check">
                <input className="form-check-input" type="checkbox"
                       checked={isAvailable}
                       onChange={e => setIsAvailable(e.target.checked)}
                       id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    is available
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox"
                       checked={isCountryside}
                       onChange={e => setIsCountryside(e.target.checked)}
                       id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    is countryside
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox"
                       checked={hasSwimmingPool}
                       onChange={e => setHasSwimmingPool(e.target.checked)}
                       id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    has swimming pool
                </label>
            </div>
            <br/>
            <div>
                <select value={type} defaultValue="placeholder" className="form-select"
                        id="exampleSelect1"
                        onChange={e => setType(e.target.value)
                        }>
                    <option hidden value="placeholder">Select a type</option>
                    {options.map(({value, label}) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
            </div>
            <div>
                <label className="col-form-label mt-2 ms-2" htmlFor="textareaDescription">description:</label>
                <textarea className="form-control" placeholder="Property description" id="textareaDescription"
                          value={description}
                          onChange={e => setDescription(e.target.value)}
                          maxLength="250" rows="3"/>
            </div>
        </Card>
    )
}
