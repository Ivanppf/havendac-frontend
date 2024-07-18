import React, {useState} from "react";
import './propertyCreate.css';
import {notifyWarning} from "../../components/Toastify";
import PropertyRequestService from "../../service/PropertyRequestService";
import PropertyCard from "./propertyCard.js"

const options = [
    {label: "Apartment", value: "APARTMENT"},
    {label: "House", value: "HOUSE"},
    {label: "Bedroom", value: "BEDROOM"},
    {label: "Cabin", value: "CABIN"},
    {label: "Bed & Breakfasts", value: "BED_N_BREAKFASTS"},
    {label: "Farm", value: "FARM"}
]

export default function PropertyCreate() {

    const propertyRequestService = new PropertyRequestService();

    const validate = (propertyType, description) => {

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

            const errors = validate(propertyType, description);
            if (errors.length > 0) {
                errors.forEach((message, index) => {
                    notifyWarning(message)
                })
            } else {
                propertyRequestService.create(property)
            }
    }

    return (
        <PropertyCard register={register}/>
    )
}
