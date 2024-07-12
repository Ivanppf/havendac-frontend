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
        navigate("/rooms/create", {state: data});
    }

    function loadTable() {
        roomRequestService.findAll().then(itens => setTableItens(itens))
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