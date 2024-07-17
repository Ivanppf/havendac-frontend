import {Bounce, toast} from "react-toastify";

const options = {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
}

export function notifyError(msg) {
    toast.error(msg, options);
}

export function notifySuccess(msg) {
    toast.success(msg, options);
}

export function notifyWarning(msg) {
    toast.warning(msg, options);
}