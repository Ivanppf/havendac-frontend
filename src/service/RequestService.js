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


    return await axios.get(apiUrl)
        .then(response => response.data)
        .catch(() => [])

}

export async function post(apiUrl, item) {
    await axios.post(apiUrl, item)
        .then(response => window.alert(response.status))
        .catch((error) => window.alert(error))
}

export async function remove(apiUrl, id) {
    window.alert(`${apiUrl}/${id}`)
    //await axios.delete(`${apiUrl}/${id}`)
}

export async function update(apiUrl, item) {
    window.alert(`${apiUrl}/${item.id}`)
    // await axios.put(`${apiUrl}/${item.id}`, item)
}