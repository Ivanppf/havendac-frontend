import "./roomCreate.css";
import React from "react";
import { notifyWarning } from "../../components/Toastify";
import RoomRequestService from "../../service/RoomRequestService";
import RoomCard from "./RoomCard";

export default function RoomCreate() {
  const roomRequestService = new RoomRequestService();

  const validate = (length, width, roomType, propertyId) => {
    const errors = [];
    if (!length || length === "0") {
      errors.push("Please, insert a room length");
    } else if (!width || width === "0") {
      errors.push("Please, insert a room width");
    } else if (!roomType) {
      errors.push("Please, select a room type");
    } else if (!propertyId || propertyId === "0") {
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
      roomRequestService.create(room);
    }
  }

  return <RoomCard register={register} btnName={"Create"} />;
}
