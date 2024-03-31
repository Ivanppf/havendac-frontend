import React, {useEffect, useState} from "react";
import Table from "../../components/Table";
import checkIcon from "../../assets/CHECK-CIRCLE.svg"
import cancelIcon from "../../assets/CANCEL.svg"
import {findAll, remove} from "../../service/RequestService";
import {useNavigate} from "react-router-dom";

function PropertyTable() {

    const apiUrl = "http://localhost:8080/api/properties"
    let [tableItens, setTableItens] = useState([])

    useEffect(() => {
        loadTable()
    })

    function deleteProperty(index) {
        const resp = window.confirm(`Are you sure you want to delete this property? ${index}`)
        if (resp) {
            remove(apiUrl, tableItens[index].id)
        }
    }

    const navigate = useNavigate();

    function editProperty(index) {
        const data = tableItens[index]
        data["id"] = tableItens[index].id
        navigate("/properties/create", {state: data});
    }

    function loadTable() {
        findAll(apiUrl)
            .then(itens => setTableItens(itens))
    }

    return (
        <>
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
        </>
    )
}

export default PropertyTable