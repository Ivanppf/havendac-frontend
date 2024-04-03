import axios from "axios";
import {Bounce, toast} from "react-toastify";
import React from "react";

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
        .catch((error) => {
            notifyError(`${error}`)
            return []
        })

}

export async function post(apiUrl, item) {
    await axios.post(apiUrl, item)
        .then(response => notifySuccess("Created successfully"))
        .catch((error) => {
            console.log(error)
            notifyError(`${error}`)
        })
}

export async function remove(apiUrl, id) {
    // window.alert(`${apiUrl}/${id}`)
    await axios.delete(`${apiUrl}/${id}`)
        .then(() => notifySuccess("Deleted successfully"))
        .catch((error) => notifyError(`${error}`))
}

export async function update(apiUrl, id, item) {
    // window.alert(`${apiUrl}/${id}`)
    // console.log(item)
    await axios.put(`${apiUrl}/${id}`, item)
        .then(() => notifySuccess("Updated successfully"))
        .catch((error) => notifyError(`${error}`))
}

const notifyError = (msg) => {
    toast.error(msg, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
}

const notifySuccess = (msg) => {
    toast.success(msg, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
}