import React, {useState} from "react";
import {useLoaderData, useNavigate} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Table from "../../components/Table";
import RoomRequestService from "../../service/RoomRequestService";


export default function RoomTable() {

    const navigate = useNavigate();
    let [tableItens, setTableItens] = useState(useLoaderData())
    const roomRequestService = new RoomRequestService();

    function deleteRoom(index) {
        const resp = window.confirm(`Are you sure you want to delete this room? ${index}`)
        if (resp) {
            roomRequestService.remove(tableItens[index].id).then(loadTable)
        }
    }

    function editRoom(index) {
        const data = tableItens[index]
        data["id"] = tableItens[index].id
        navigate("/rooms/update", {state: data});
    }

    function loadTable() {
        roomRequestService.findAll().then(itens => setTableItens(itens))
        // setTableItens([
        //     {
        //         "id": 1,
        //         "length": 5,
        //         "width": 4,
        //         "area":20,
        //         "roomType": "BEDROOM",
        //         "propertyId": 1
        //     },
        //     {
        //         "id": 2,
        //         "length": 3,
        //         "width": 3,
        //         "area":9,
        //         "roomType": "BATHROOM",
        //         "propertyId": 1
        //     },
        //     {
        //         "id": 3,
        //         "length": 6,
        //         "width": 5,
        //         "area":30,
        //         "roomType": "KITCHEN",
        //         "propertyId": 2
        //     }
        // ]
    // )
    }

    return (
        <Table className="div-property-table"
               titles={["ROOM ID", "LENGTH", "WIDTH", "TYPE", "AREA", "PROPERTY ID"]}
               entityName="Room"
               href="/rooms/create"
               editBtn={editRoom}
               search={loadTable}
               deleteBtn={deleteRoom}>
            {tableItens.map(item => {
                return (
                    <>
                        <td>{item.id}</td>
                        <td>{item.length} mts</td>
                        <td>{item.width} mts</td>
                        <td>{item.roomType}</td>
                        <td>{item.area} m²</td>
                        <td>{item.propertyId}</td>
                    </>
                )
            })}</Table>
    )
}