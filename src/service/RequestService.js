import axios from "axios";
import {Bounce, toast} from "react-toastify";

export async function findAll(apiUrl, queryParameters) {

    //http://localhost:8080/properties?type=APARTMENT&isAvailable=true
    //http://localhost:8080/properties?type=APARTMENT

    if (queryParameters !== undefined) {

        var parameters = "?"

        for (let i = 0; i < queryParameters.length; i++) {
            if (queryParameters[i].value !== "") {
                parameters += queryParameters[i].name + "=" + queryParameters[i].value
                parameters += "&"
            }
        }
        parameters = parameters.slice(0, -1)
        apiUrl += parameters
        console.log(parameters)

    }


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