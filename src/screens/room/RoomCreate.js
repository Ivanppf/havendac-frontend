import './roomCreate.css';
import Card from "../../components/Card";
import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import {post, update} from "../../service/RequestService";

const apiUrl = "http://localhost:8080/api/rooms"
const options = [
    {label: "Bedroom", value: "BEDROOM"},
    {label: "Bathroom", value: "BATHROOM"},
    {label: "Kitchen", value: "KITCHEN"},
    {label: "Living room", value: "LIVING_ROOM"},
    {label: "Dining room", value: "DINING_ROOM"},
    {label: "Laundry", value: "LAUNDRY"}
]

export default function RoomCreate() {

    let [length, setLength] = useState(0)
    let [width, setWidth] = useState(0)
    let [roomType, setRoomType] = useState("")
    let [propertyId, setPropertyId] = useState(0)

    const data = useLocation();

    function register() {
        const room = {
            length: length,
            width: width,
            roomType: roomType,
            propertyId: propertyId
        }
        if (data.state != null) {
            update(apiUrl, data.state.id, room)
        } else {
            post(apiUrl, room)
        }
    }

    function loadUpdateData() {
        setLength(data.state.length)
        setWidth(data.state.width)
        setRoomType(data.state.roomType)
        setPropertyId(data.state.propertyId)
    }

    const [constructorHasRun, setConstructorHasRun] = useState(false);
    const constructor = () => {
        if (constructorHasRun) return;
        if (data.state != null) {
            loadUpdateData();
        }
        setConstructorHasRun(true);
    };
    constructor()

    return (
        <Card className="div-cadastro-room" title="Room" register={register}>
            <div>
                <label
                    className="col-form-label mt-2"
                    htmlFor="inputLength">length</label>
                <input
                    type="number"
                    className="form-control"
                    value={length}
                    id="inputLength"
                    onChange={e => setLength(e.target.value)}/>
            </div>
            <div>
                <label
                    className="col-form-label mt-2"
                    htmlFor="inputWidth">width</label>
                <input
                    type="number"
                    className="form-control"
                    value={width}
                    id="inputWidth"
                    onChange={e => setWidth(e.target.value)}/>
            </div>
            <br/>
            <div>
                <select value={roomType} defaultValue="placeholder" className="form-select"
                        id="exampleSelect1"
                        onChange={e => setRoomType(e.target.value)
                        }>
                    <option hidden value="placeholder">Select a type</option>
                    {options.map(({value, label}) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>
            </div>
            <div>
                <label
                    className="col-form-label mt-2"
                    htmlFor="inputPropertyId">property id</label>
                <input
                    type="number"
                    className="form-control"
                    value={propertyId}
                    id="inputPropertyId"
                    onChange={e => setPropertyId(e.target.value)}/>
            </div>
        </Card>
    )
}
