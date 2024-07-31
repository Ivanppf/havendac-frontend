import React, { useEffect, useState } from "react";
import "./propertyCreate.css";
import { useLocation } from "react-router-dom";

import { notifyError, notifyWarning } from "../../components/Toastify";
import PropertyRequestService from "../../service/PropertyRequestService";
import PropertyCard from "./propertyCard";

export default function PropertyUpdate() {
  const data = useLocation();
  let [property, setProperty] = useState("");
  const propertyRequestService = new PropertyRequestService();

  const validate = (propertyType, description) => {
    const errors = [];
    if (!propertyType) {
      errors.push("Please, select a property type");
    }
    if (!description || description.trim().length < 1) {
      errors.push("Please, type a description");
    }
    return errors;
  };

  function register(
    propertyId,
    isAvailable,
    isCountryside,
    hasSwimmingPool,
    propertyType,
    description
  ) {
    const property = {
      propertyId: propertyId,
      isAvailable: isAvailable,
      isCountryside: isCountryside,
      hasSwimmingPool: hasSwimmingPool,
      propertyType: propertyType,
      description: description,
    };

    const errors = validate(propertyType, description);
    if (errors.length > 0) {
      errors.forEach((message, index) => {
        notifyWarning(message);
      });
    } else {
      propertyRequestService.update(property.propertyId, property);
    }
  }

  function loadUpdateData() {
    setProperty({
      propertyId: data.state.id,
      isAvailable: data.state.isAvailable,
      isCountryside: data.state.isCountryside,
      hasSwimmingPool: data.state.hasSwimmingPool,
      propertyType: data.state.type,
      description: data.state.description,
    });
  }

  useEffect(() => {
    if (data.state != null) {
      loadUpdateData();
    } else {
      notifyError("Something went wrong");
    }
  }, []);

  return <PropertyCard data={property} register={register} btnName="Update" />;
}
