import React, {useState} from "react";
import Table from "../../components/Table";
import {findAll, remove} from "../../service/RequestService";
import {useNavigate} from "react-router-dom";


export default function RoomTable() {

    const apiUrl = "http://localhost:8080/api/rooms"
    const navigate = useNavigate();
    let [tableItens, setTableItens] = useState([])

    const [constructorHasRun, setConstructorHasRun] = useState(false);
    const constructor = () => {
        if (constructorHasRun) return;
        loadTable()
        setConstructorHasRun(true);
    };

    constructor()

    function deleteRoom(index) {
        const resp = window.confirm(`Are you sure you want to delete this room? ${index}`)
        if (resp) {
            remove(apiUrl, tableItens[index].id)
        }
    }

    function editRoom(index) {
        const data = tableItens[index]
        data["id"] = tableItens[index].id
        navigate("/rooms/create", {state: data});
    }

    function loadTable() {
        findAll(apiUrl)
            .then(itens => setTableItens(itens))
    }

    return (
        <Table className="div-property-table"
               titles={["ROOM ID", "LENGTH", "WIDTH", "AREA", "PROPERTY ID"]}
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
                        <td>{item.area} m²</td>
                        <td>{item.propertyId}</td>
                    </>
                )
            })}</Table>
    )
}