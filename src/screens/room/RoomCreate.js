import './roomCreate.css';
import Card from "../../components/Card";
import {useState} from "react";
import {useLocation} from "react-router-dom";
import {post, update} from "../../service/RequestService";

export default function RoomCreate() {

    const apiUrl = "http://localhost:8080/api/rooms"

    let [length, setLength] = useState(0)
    let [width, setWidth] = useState(0)
    let [propertyId, setPropertyId] = useState(0)

    const data = useLocation();

    function register() {
        const room = {
            length: length,
            width: width,
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
