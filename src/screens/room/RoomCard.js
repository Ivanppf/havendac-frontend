import "./roomCreate.css";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";

const options = [
  { label: "Bedroom", value: "BEDROOM" },
  { label: "Bathroom", value: "BATHROOM" },
  { label: "Kitchen", value: "KITCHEN" },
  { label: "Living room", value: "LIVING_ROOM" },
  { label: "Dining room", value: "DINING_ROOM" },
  { label: "Laundry", value: "LAUNDRY" },
];

export default function RoomCard(props) {
  let [roomId, setRoomId] = useState(0);
  let [length, setLength] = useState(0);
  let [width, setWidth] = useState(0);
  let [roomType, setRoomType] = useState("");
  let [propertyId, setPropertyId] = useState(0);

  useEffect(() => {
    if (props.data != null) {
      setRoomId(props.data.roomId);
      setLength(props.data.length);
      setWidth(props.data.width);
      setRoomType(props.data.roomType);
      setPropertyId(props.data.propertyId);
    }
  }, [props.data]);

  return (
    <Card className="div-cadastro-room" title="Room">
      <div>
        <label className="col-form-label mt-2" htmlFor="inputLength">
          length
        </label>
        <input
          type="number"
          className="form-control"
          value={length}
          id="inputLength"
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div>
        <label className="col-form-label mt-2" htmlFor="inputWidth">
          width
        </label>
        <input
          type="number"
          className="form-control"
          value={width}
          id="inputWidth"
          onChange={(e) => setWidth(e.target.value)}
        />
      </div>
      <br />
      <div>
        <select
          value={roomType}
          className="form-select"
          id="exampleSelect1"
          onChange={(e) => setRoomType(e.target.value)}
        >
          <option hidden value="">
            Select a type
          </option>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="col-form-label mt-2" htmlFor="inputPropertyId">
          property id
        </label>
        <input
          type="number"
          className="form-control"
          value={propertyId}
          id="inputPropertyId"
          onChange={(e) => setPropertyId(e.target.value)}
        />
      </div>
      <div className="div-button-property mt-2">
        <button
          className="btn btn-primary"
          onClick={() =>
            props.register(roomId, length, width, roomType, propertyId)
          }
        >
          {props.btnName}
        </button>
      </div>
    </Card>
  );
}
