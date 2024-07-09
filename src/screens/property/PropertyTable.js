import React, {useState} from "react";
import Table from "../../components/Table";
import checkIcon from "../../assets/CHECK-CIRCLE.svg"
import cancelIcon from "../../assets/CANCEL.svg"
import {findAll, remove} from "../../service/RequestService";
import {useLoaderData, useNavigate} from "react-router-dom";
import {options} from "./PropertyCreate"
import "./propertyTable.css"

const apiUrl = "http://localhost:8080/api/properties"

export const booleanOptions = [
    {label: "--", value: ""},
    {label: "true", value: true},
    {label: "false", value: false},
]

export default function PropertyTable() {

    const navigate = useNavigate();
    let [tableItens, setTableItens] = useState(useLoaderData())
    let [propertyId, setPropertyId] = useState("")
    let [isAvailable, setIsAvailable] = useState(false)
    let [isCountryside, setIsCountryside] = useState(false)
    let [hasSwimmingPool, setHasSwimmingPool] = useState(false)
    let [type, setType] = useState("")


    function deleteProperty(index) {
        const resp = window.confirm(`Are you sure you want to delete this property? ${index}`)
        if (resp) {
            remove(apiUrl, tableItens[index].id)
        }
    }

    function editProperty(index) {
        const data = tableItens[index]
        data["id"] = tableItens[index].id
        navigate("/properties/create", {state: data});
    }

    function loadTable() {
        const parameters = [
            {name: "propertyId", value: propertyId},
            {name: "type", value: type},
            {name: "isAvailable", value: isAvailable},
            {name: "isCountryside", value: isCountryside},
            {name: "hasSwimmingPool", value: hasSwimmingPool}
        ]
        findAll(apiUrl, parameters)
            .then(itens => setTableItens(itens))
    }

    return (
        <div className="div-property">
            <div className="div-property-inputs">
                <label className="form-check-label">property id</label>
                <input className="form-control" type="number" onChange={e => setPropertyId(e.target.value)}/>
                <br/>
                <label className="form-check-label">Type</label>
                <select className="form-select" onChange={e => setType(e.target.value)}>
                    <option value="">--</option>
                    {options.map(({value, label}) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
                <br/>
                <label className="form-check-label">Is available</label>
                <select className="form-select" onChange={e => setIsAvailable(e.target.value)}>
                    {booleanOptions.map(({value, label}) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
                <br/>
                <label className="form-check-label">Is countryside</label>
                <select className="form-select" onChange={e => setIsCountryside(e.target.value)}>
                    {booleanOptions.map(({value, label}) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
                <br/>
                <label className="form-check-label">Has swimming pool</label>
                <select className="form-select" onChange={e => setHasSwimmingPool(e.target.value)}>
                    {booleanOptions.map(({value, label}) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
            </div>
            <Table className="div-property-table"
                   titles={["PROPERTY ID", "TYPE", "IS AVAILABLE", "IS COUNTRYSIDE", "HAS SWIMMING POOL", "DESCRIPTION"]}
                   entityName="Property"
                   deleteBtn={deleteProperty}
                   editBtn={editProperty}
                   search={loadTable}
                   href={"/properties/create"}>
                {tableItens.map(item => {
                    return (
                        <>
                            <td>{item.id}</td>
                            <td>{item.type}</td>
                            <td><img src={item.isAvailable ? checkIcon : cancelIcon} alt="icon"/></td>
                            <td><img src={item.isCountryside ? checkIcon : cancelIcon} alt="icon"/></td>
                            <td><img src={item.hasSwimmingPool ? checkIcon : cancelIcon} alt="icon"/></td>
                            <td>{item.description}</td>
                        </>
                    )
                })}</Table>
        </div>
    )
}
