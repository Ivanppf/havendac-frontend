import RequestService from "./RequestService";

export default class RoomRequestService extends RequestService {
    constructor() {
        super("/rooms");
    }

    create(room) {
        return super.create(room)
    }

    update(id, room) {
        return super.update(id, room)
    }

    remove(id) {
        return super.remove(id)
    }

    findAll() {
        return super.findAll()
    }

}