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
        .then(response => window.alert("Created successfully"))
        .catch((error) => window.alert(error))
}

export async function remove(apiUrl, id) {
    // window.alert(`${apiUrl}/${id}`)
    await axios.delete(`${apiUrl}/${id}`)
        .catch((error) => window.alert(error))
}

export async function update(apiUrl, id, item) {
    // window.alert(`${apiUrl}/${id}`)
    // console.log(item)
    await axios.put(`${apiUrl}/${id}`, item)
        .catch((error) => console.log(error))
}