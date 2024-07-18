import React, {useState} from "react";
import './propertyCreate.css';
import {useLoaderData, useLocation} from "react-router-dom";

import {notifyWarning} from "../../components/Toastify";
import PropertyRequestService from "../../service/PropertyRequestService";
import PropertyCard from "./propertyCard";

const options = [
    {label: "Apartment", value: "APARTMENT"},
    {label: "House", value: "HOUSE"},
    {label: "Bedroom", value: "BEDROOM"},
    {label: "Cabin", value: "CABIN"},
    {label: "Bed & Breakfasts", value: "BED_N_BREAKFASTS"},
    {label: "Farm", value: "FARM"}
]

export default function PropertyUpdate() {

    // let [isAvailable, setIsAvailable] = useState(false)
    // let [isCountryside, setIsCountryside] = useState(false)
    // let [hasSwimmingPool, setHasSwimmingPool] = useState(false)
    // let [propertyType, setPropertyType] = useState("")
    // let [description, setDescription] = useState("")

    const data = useLocation();
    let [property, setProperty] = useState("")
    const propertyRequestService = new PropertyRequestService();


    const validate = (propertyType,description) => {

        const errors = [];
        if (!propertyType) {
            errors.push("Please, select a property type")
        }
        if (!description || description.trim().length < 1) {
            errors.push("Please, type a description")
        }
        return errors;
    }

    function register(isAvailable,isCountryside,hasSwimmingPool,propertyType,description) {
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
        setProperty({
            isAvailable: data.state.isAvailable,
            isCountryside: data.state.isCountryside,
            hasSwimmingPool: data.state.hasSwimmingPool,
            propertyType: data.state.type,
            description: data.state.description
        })
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

        <div>
            <PropertyCard data={property}/>
        </div>
        // <p>aqui: {property.description}.</p>

        // passar os atributos para o property create
        // deixar o property create somente para criação e o update somente pra atualizar
        // talvez separar o html do propertyCreate para poder reutilizar
        // tentar carregar os dados usando o routes

    )
}
