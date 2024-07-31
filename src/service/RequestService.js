import axios from "axios";
import { notifyError, notifySuccess } from "../components/Toastify";
import StorageService from "./StorageService";

export const TOKEN = "TOKEN";
export const LOGGED_USER = "loggedUser";

export default class RequestService {
  baseUrl = "http://localhost:8080/api";

  constructor(endpoint) {
    this.url = this.buildUrl(endpoint);

    const storageService = new StorageService();
    const token = storageService.getItem(TOKEN);
    this.registerToken(token);
  }

  async findAll() {
    return await axios
      .get(this.url)
      .then((response) => response.data)
      .catch(() => {
        notifyError(`Error while getting data`);
        return [];
      });
  }

  async create(item) {
    await axios
      .post(this.url, item)
      .then(() => notifySuccess("Created successfully"))
      .catch(() => {
        notifyError(`Error while creating data`);
        return [];
      });
  }

  async remove(id) {
    await axios
      .delete(`${this.url}/${id}`)
      .then(() => notifySuccess("Deleted successfully"))
      .catch(() => {
        notifyError(`Error while removing data`);
        return [];
      });
  }

  async update(id, item) {
    await axios
      .put(`${this.url}/${id}`, item)
      .then(() => notifySuccess("Updated successfully"))
      .catch(() => {
        notifyError(`Error while updating data`);
        return [];
      });
  }

  async login(userCredencials) {
    return await axios
      .post(`${this.url}`, userCredencials)
      .then((response) => {
        notifySuccess(`Welcome, ${response.data.user.nickname}`);
        return response.data;
      })
      .catch(() => {
        notifyError(`Login error`);
      });
  }

  async register(user) {
    return await axios
      .post(`${this.url}`, user)
      .then((response) => {
        notifySuccess("Registered successfully");
        return response.data;
      })
      .catch(() => {
        notifyError(`Error while creating user`);
      });
  }

  async logout() {
    await axios.post(`${this.url}/logout`)
  }

  buildUrl(endpoint) {
    return `${this.baseUrl}${endpoint}`;
  }

  registerToken(token) {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `${token}`;
    }
  }
}
