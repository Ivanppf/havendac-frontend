import React, {useState} from "react";
import './propertyCreate.css';
import {useLocation} from "react-router-dom";

import {notifyWarning} from "../../components/Toastify";
import Card from "../../components/Card";
import PropertyRequestService from "../../service/PropertyRequestService";

const options = [
    {label: "Apartment", value: "APARTMENT"},
    {label: "House", value: "HOUSE"},
    {label: "Bedroom", value: "BEDROOM"},
    {label: "Cabin", value: "CABIN"},
    {label: "Bed & Breakfasts", value: "BED_N_BREAKFASTS"},
    {label: "Farm", value: "FARM"}
]

export default function PropertyCreate() {

    let [isAvailable, setIsAvailable] = useState(false)
    let [isCountryside, setIsCountryside] = useState(false)
    let [hasSwimmingPool, setHasSwimmingPool] = useState(false)
    let [propertyType, setPropertyType] = useState("")
    let [description, setDescription] = useState("")

    const data = useLocation();
    const propertyRequestService = new PropertyRequestService();

    const validate = () => {

        const errors = [];
        if (!propertyType) {
            errors.push("Please, select a property type")
        }
        if (!description || description.trim().length < 1) {
            errors.push("Please, type a description")
        }
        return errors;
    }

    function register() {
        const property = {
            isAvailable: isAvailable,
            isCountryside: isCountryside,
            hasSwimmingPool: hasSwimmingPool,
            propertyType: propertyType,
            description: description.trim()
        }
        if (data.state != null) {
            propertyRequestService.update(data.state.id, property)
        } else {
            const errors = validate();
            if (errors.length > 0) {
                errors.forEach((message, index) => {
                    notifyWarning(message)
                })
            } else {
                propertyRequestService.create(property)
            }
        }
    }

    function loadUpdateData() {
        setIsAvailable(data.state.isAvailable)
        setIsCountryside(data.state.isCountryside)
        setHasSwimmingPool(data.state.hasSwimmingPool)
        setPropertyType(data.state.type)
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
                <select value={propertyType} defaultValue="placeholder" className="form-select"
                        id="exampleSelect1"
                        onChange={e => setPropertyType(e.target.value)
                        }>
                    <option hidden value="">Select a type</option>
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
