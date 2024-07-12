import RequestService from "./RequestService";

export default class PropertyRequestService extends RequestService {
    constructor() {
        super("/properties");
    }

    create(property) {
        return super.create(property)
    }

    update(id, property) {
        return super.update(id, property)
    }

    remove(id) {
        return super.remove(id)
    }

    findAll() {
        return super.findAll()
    }

}