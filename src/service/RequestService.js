import axios from "axios";

export async function findAll(apiUrl) {


    // const myInit: RequestInit = {
    //     method: "GET",
    //     mode: "cors",
    //     cache: "default",
    // };
    // try {
    //     return await fetch(apiUrl, myInit)
    // } catch (error) {
    //     return null
    // }


    return axios.get(apiUrl)
        .then(response => response.data)
        .catch((error) => window.alert(error))

}

export async function post(apiUrl, item) {
    axios.post(apiUrl, item)
        .then(response => window.alert(response.status))
        .catch((error) => window.alert(error))
}

export async function remove(apiUrl, id) {
    window.alert(apiUrl + id)
}