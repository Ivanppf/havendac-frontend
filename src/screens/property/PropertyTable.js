import React from "react";
import Table from "../../components/Table";
import checkIcon from "../../assets/CHECK-CIRCLE.svg"
import cancelIcon from "../../assets/CANCEL.svg"


export default class PropertyTable extends React.Component {

    tableItens = [
        {
            id: 1,
            type: "APARTMENT",
            isAvailable: true,
            isCountryside: false,
            hasSwimmingPool: true,
            description: "Spacious apartment in the city center with a swimming pool."
        },
        {
            id: 2,
            type: "HOUSE",
            isAvailable: true,
            isCountryside: true,
            hasSwimmingPool: false,
            description: "Cozy countryside house perfect for a weekend getaway."
        },
        {
            id: 3,
            type: "BEDROOM",
            isAvailable: false,
            isCountryside: false,
            hasSwimmingPool: false,
            description: "Comfortable bedroom in a shared apartment."
        },
        {
            id: 4,
            type: "CABIN",
            isAvailable: true,
            isCountryside: true,
            hasSwimmingPool: false,
            description: "Rustic cabin nestled in the woods, ideal for nature lovers."
        },
        {
            id: 5,
            type: "BED_N_BREAKFASTS",
            isAvailable: true,
            isCountryside: true,
            hasSwimmingPool: true,
            description: "Quaint bed and breakfast with a swimming pool, perfect for a relaxing stay."
        },
        {
            id: 6,
            type: "APARTMENT",
            isAvailable: true,
            isCountryside: false,
            hasSwimmingPool: true,
            description: "Spacious apartment in the city center with a swimming pool."
        },
        {
            id: 7,
            type: "HOUSE",
            isAvailable: true,
            isCountryside: true,
            hasSwimmingPool: false,
            description: "Cozy countryside house perfect for a weekend getaway."
        },
        {
            id: 8,
            type: "BEDROOM",
            isAvailable: false,
            isCountryside: false,
            hasSwimmingPool: false,
            description: "Comfortable bedroom in a shared apartment."
        },
        {
            id: 9,
            type: "CABIN",
            isAvailable: true,
            isCountryside: true,
            hasSwimmingPool: false,
            description: "Rustic cabin nestled in the woods, ideal for nature lovers."
        },
        {
            id: 10,
            type: "BED_N_BREAKFASTS",
            isAvailable: true,
            isCountryside: true,
            hasSwimmingPool: true,
            description: "Quaint bed and breakfast with a swimming pool, perfect for a relaxing stay."
        }
    ]

    deleteProperty = (index) => {
        window.confirm(`Are you sure you want to delete this property? ${index}`)
    }

    editProperty = (index, item) => {
        // window.prompt(`index: ${index} item: ${item}`)
        console.log(`index: ${index} item: ${item.id}`)
    }


    render() {
        return (
            <Table className="div-property-table"
                   titles={["PROPERTY ID", "TYPE", "IS AVAILABLE", "IS COUNTRYSIDE", "HAS SWIMMING POOL", "DESCRIPTION"]}
                   object="Property"
                   deleteBtn={this.deleteProperty}
                   editBtn={this.editProperty}>
                {this.tableItens.map(item => {
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
        )
    }
}