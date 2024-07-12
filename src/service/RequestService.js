import axios from "axios";
import {notifyError, notifySuccess} from "../components/Toastify";

export default class RequestService {

    baseUrl = "http://localhost:8080/api";

    constructor(endpoint) {
        this.url = this.buildUrl(endpoint)
    }

    async findAll() {
        return await axios.get(this.url)
            .then(response => response.data)
            .catch((error) => {
                notifyError(error.response.data)
                return []
            }).catch(() => {
                notifyError(`Error while getting data`)
                return []
            })
    }

    async create(item) {
        await axios.post(this.url, item)
            .then(() => notifySuccess("Created successfully"))
            .catch((error) => {
                notifyError(error.response.data)
                return []
            }).catch(() => {
                notifyError(`Error while creating data`)
                return []
            })
    }

    async remove(id) {
        await axios.delete(`${this.url}/${id}`)
            .then(() => notifySuccess("Deleted successfully"))
            .catch((error) => {
                notifyError(error.response.data)
                return []
            }).catch(() => {
                notifyError(`Error while removing data`)
                return []
            })
    }

    async update(id, item) {
        await axios.put(`${this.url}/${id}`, item)
            .then(() => notifySuccess("Updated successfully"))
            .catch((error) => {
                notifyError(error.response.data)
                return []
            }).catch(() => {
                notifyError(`Error while updating data`)
                return []
            })
    }

    buildUrl(endpoint) {
        return `${this.baseUrl}${endpoint}`
    }

}
