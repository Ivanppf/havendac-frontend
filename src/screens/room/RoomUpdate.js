import "./roomCreate.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { notifyError, notifyWarning } from "../../components/Toastify";
import RoomRequestService from "../../service/RoomRequestService";
import RoomCard from "./RoomCard";

export default function RoomCreate() {
  const data = useLocation();
  let [room, setRoom] = useState("");
  const roomRequestService = new RoomRequestService();

  const validate = (length, width, roomType, propertyId) => {
    const errors = [];
    if (!length || length === "0") {
      errors.push("Please, insert a room length");
    }
    if (!width || width === "0") {
      errors.push("Please, insert a room width");
    }
    if (!roomType) {
      errors.push("Please, select a room type");
    }
    if (!propertyId || propertyId === "0") {
      errors.push("Please, insert a property id");
    }
    return errors;
  };

  function register(length, width, roomType, propertyId) {
    const room = {
      length: length,
      width: width,
      roomType: roomType,
      propertyId: propertyId,
    };

    const errors = validate(length, width, roomType, propertyId);
    if (errors.length > 0) {
      errors.forEach((message, index) => {
        notifyWarning(message);
      });
    } else {
      roomRequestService.update(room.roomId, room);
    }
  }

  function loadUpdateData() {
    setRoom({
      roomId: data.state.roomId,
      length: data.state.length,
      width: data.state.width,
      roomType: data.state.roomType,
      propertyId: data.state.propertyId,
    });
  }

  const [constructorHasRun, setConstructorHasRun] = useState(false);
  const constructor = () => {
    if (constructorHasRun) return;
    if (data.state != null) {
      loadUpdateData();
    } else {
      notifyError("Something went wrong");
    }
    setConstructorHasRun(true);
  };
  constructor();

  return <RoomCard data={room} register={register} btnName={"Update"} />;
}
