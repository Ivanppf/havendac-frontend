import './roomCreate.css';
import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import {notifyWarning} from "../../components/Toastify";
import RoomRequestService from "../../service/RoomRequestService";

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
    const roomRequestService = new RoomRequestService();

    const validate = () => {

        const errors = [];
        if (!length || length === "0") {
            errors.push("Please, insert a room length")
        }
        if (!width || width === "0") {
            errors.push("Please, insert a room width")
        }
        if (!roomType) {
            errors.push("Please, select a room type")
        }
        if (!propertyId || propertyId === "0") {
            errors.push("Please, insert a property id")
        }
        return errors;
    }

    function register() {
        const room = {
            length: length,
            width: width,
            roomType: roomType,
            propertyId: propertyId
        }
        if (data.state != null) {
            roomRequestService.update(data.state.id, room)
        } else {
            const errors = validate();
            if (errors.length > 0) {
                errors.forEach((message, index) => {
                    notifyWarning(message)
                })
            } else {
                roomRequestService.create(room)
            }
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
        <div className="div-cadastro-room" title="Room" register={register}>
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
                    <option hidden value="">Select a type</option>
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
        </div>
    )
}
