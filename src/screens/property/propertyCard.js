import React, { useEffect, useState } from "react";
import "./propertyCreate.css";
import Card from "../../components/Card.js";

const options = [
  { label: "Apartment", value: "APARTMENT" },
  { label: "House", value: "HOUSE" },
  { label: "Bedroom", value: "BEDROOM" },
  { label: "Cabin", value: "CABIN" },
  { label: "Bed & Breakfasts", value: "BED_N_BREAKFASTS" },
  { label: "Farm", value: "FARM" },
];

export default function PropertyCard(props) {
  let [propertyId, setPropertyId] = useState(0);
  let [isAvailable, setIsAvailable] = useState(false);
  let [isCountryside, setIsCountryside] = useState(false);
  let [hasSwimmingPool, setHasSwimmingPool] = useState(false);
  let [propertyType, setPropertyType] = useState("");
  let [description, setDescription] = useState("");

  useEffect(() => {
    if (props.data != null) {
      setPropertyId(props.data.propertyId);
      setIsAvailable(props.data.isAvailable);
      setIsCountryside(props.data.isCountryside);
      setHasSwimmingPool(props.data.hasSwimmingPool);
      setPropertyType(props.data.propertyType);
      setDescription(props.data.description);
    }
  }, [props.data]);

  return (
    <Card className="div-cadastro-property" title="Property">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isAvailable}
          onChange={(e) => setIsAvailable(e.target.checked)}
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          is available
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isCountryside}
          onChange={(e) => setIsCountryside(e.target.checked)}
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          is countryside
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={hasSwimmingPool}
          onChange={(e) => setHasSwimmingPool(e.target.checked)}
          id="flexCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          has swimming pool
        </label>
      </div>
      <br />
      <div>
        <select
          value={propertyType}
          className="form-select"
          id="exampleSelect1"
          onChange={(e) => setPropertyType(e.target.value)}
        >
          <option hidden value="">
            Select a type
          </option>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          className="col-form-label mt-2 ms-2"
          htmlFor="textareaDescription"
        >
          description:
        </label>
        <textarea
          className="form-control"
          placeholder="Property description"
          id="textareaDescription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength="250"
          rows="3"
        />
      </div>
      <div className="div-button-property mt-2">
        <button
          className="btn btn-primary"
          onClick={() =>
            props.register(
              propertyId,
              isAvailable,
              isCountryside,
              hasSwimmingPool,
              propertyType,
              description
            )
          }
        >
          {props.btnName}
        </button>
      </div>
    </Card>
  );
}
