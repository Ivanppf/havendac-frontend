import React, {useState} from "react";
import './propertyCreate.css';
import {useLoaderData, useLocation} from "react-router-dom";

import {notifyError, notifyWarning} from "../../components/Toastify";
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
        const p = {
            isAvailable: isAvailable,
            isCountryside: isCountryside,
            hasSwimmingPool: hasSwimmingPool,
            propertyType: propertyType,
            description: description
        }

            const errors = validate(propertyType,description);
            if (errors.length > 0) {
                errors.forEach((message, index) => {
                    notifyWarning(message)
                })
            } else {
                propertyRequestService.update(property.propertyId, p)
            }

    }

    function loadUpdateData() {
         if (data.state != null) {
        setProperty({
            propertyId : data.state.id,
            isAvailable: data.state.isAvailable,
            isCountryside: data.state.isCountryside,
            hasSwimmingPool: data.state.hasSwimmingPool,
            propertyType: data.state.type,
            description: data.state.description
        })
    } else {
            notifyError("Something went wrong")
        }
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
            <PropertyCard data={property} register={register}/>
        </div>

    )
}
