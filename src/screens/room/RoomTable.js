import React from "react";
import Table from "../../components/Table";


export default class RoomTable extends React.Component {

    tableItens = [
        {
            id: 1,
            length: 5,
            width: 4,
            area: 20,
            propertyId: 1
        },
        {
            id: 2,
            length: 6,
            width: 5,
            area: 30,
            propertyId: 2
        },
        {
            id: 3,
            length: 4,
            width: 3,
            area: 12,
            propertyId: 3
        },
        {
            id: 4,
            length: 7,
            width: 6,
            area: 42,
            propertyId: 1
        },
        {
            id: 5,
            length: 5,
            width: 4,
            area: 20,
            propertyId: 4
        },
        {
            id: 6,
            length: 6,
            width: 5,
            area: 30,
            propertyId: 2
        },
        {
            id: 7,
            length: 4,
            width: 3,
            area: 12,
            propertyId: 5
        },
        {
            id: 8,
            length: 7,
            width: 6,
            area: 42,
            propertyId: 3
        },
        {
            id: 9,
            length: 5,
            width: 4,
            area: 20,
            propertyId: 6
        },
        {
            id: 10,
            length: 6,
            width: 5,
            area: 30,
            propertyId: 4
        }
    ]

    confirmar = (index) => {
        window.confirm(`Are you sure you want to delete this room? ${index}`)
    }

    render() {
        return (
            <Table className="div-property-table"
                   titles={["ROOM ID", "LENGTH", "WIDTH", "AREA", "PROPERTY ID"]}
                   object="Room"
                   deleteBtn={this.confirmar}>
                {this.tableItens.map(item => {
                    return (
                        <>
                            <td>{item.id}</td>
                            <td>{item.length} mts</td>
                            <td>{item.width} mts</td>
                            <td>{item.area} m²</td>
                            <td>{item.propertyId}</td>
                        </>
                    )
                })}</Table>
        )
    }
}