import React from "react";
import Table from "../../components/Table";
import checkIcon from "../../assets/CHECK-CIRCLE.svg"
import cancelIcon from "../../assets/CANCEL.svg"
import {findAll, remove, update} from "../../service/RequestService";
import {useNavigate} from "react-router-dom"


export default class PropertyTable extends React.Component {

    apiUrl = "http://localhost:8080/api/properties"
    state = {
        tableItens: [
            {
                "id": 1,
                "type": "APARTMENT",
                "isAvailable": true,
                "isCountryside": false,
                "hasSwimmingPool": true,
                "description": "Spacious apartment in the city center with a swimming pool."
            },
            {
                "id": 2,
                "type": "HOUSE",
                "isAvailable": true,
                "isCountryside": true,
                "hasSwimmingPool": false,
                "description": "Cozy countryside house perfect for a weekend getaway."
            },
            {
                "id": 3,
                "type": "BEDROOM",
                "isAvailable": false,
                "isCountryside": false,
                "hasSwimmingPool": false,
                "description": "Comfortable bedroom in a shared apartment."
            },
            {
                "id": 4,
                "type": "CABIN",
                "isAvailable": true,
                "isCountryside": true,
                "hasSwimmingPool": false,
                "description": "Rustic cabin nestled in the woods, ideal for nature lovers."
            },
            {
                "id": 5,
                "type": "BED_N_BREAKFASTS",
                "isAvailable": true,
                "isCountryside": true,
                "hasSwimmingPool": true,
                "description": "Quaint bed and breakfast with a swimming pool, perfect for a relaxing stay."
            },
            {
                "id": 6,
                "type": "FARM",
                "isAvailable": false,
                "isCountryside": true,
                "hasSwimmingPool": false,
                "description": "Charming farm with scenic views, currently unavailable for bookings."
            },
            {
                "id": 7,
                "type": "APARTMENT",
                "isAvailable": true,
                "isCountryside": false,
                "hasSwimmingPool": false,
                "description": "Modern apartment in a bustling urban area."
            },
            {
                "id": 8,
                "type": "HOUSE",
                "isAvailable": true,
                "isCountryside": true,
                "hasSwimmingPool": true,
                "description": "Spacious countryside house with a private swimming pool."
            },
            {
                "id": 9,
                "type": "BEDROOM",
                "isAvailable": true,
                "isCountryside": false,
                "hasSwimmingPool": false,
                "description": "Cozy bedroom in a quiet residential neighborhood."
            },
            {
                "id": 10,
                "type": "FARM",
                "isAvailable": true,
                "isCountryside": true,
                "hasSwimmingPool": true,
                "description": "Working farm offering accommodations and farm experiences."
            }
        ]

    }

    deleteProperty = (index) => {
        const resp = window.confirm(`Are you sure you want to delete this property? ${index}`)
        if (resp) {
            remove(this.apiUrl, this.state.tableItens[index].id)
        }
    }

    editProperty = (index) => {
        // this.state.tableItens[index]
        update(this.apiUrl, this.state.tableItens[index])
        // return this.state.tableItens[index]
    }

    loadTable = () => {
        findAll(this.apiUrl)
            .then(itens => this.setState({
                tableItens: itens
            }))
        // {tableItens: [this.state.tableItens, itens]}))
    }


    render() {
        return (
            <>
                <Table className="div-property-table"
                       titles={["PROPERTY ID", "TYPE", "IS AVAILABLE", "IS COUNTRYSIDE", "HAS SWIMMING POOL", "DESCRIPTION"]}
                       entityName="Property"
                       deleteBtn={this.deleteProperty}
                       editBtn={this.editProperty}
                       search={this.loadTable}
                       href={"/properties/create"}>
                    {this.state.tableItens.map(item => {
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
}