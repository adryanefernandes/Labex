import axios from "axios"
import { urlApi } from "../apiConfig/axiosConfig"

function applyToTrip(id, body, setIsSucess) {
    axios.post(`${urlApi}/trips/${id}/apply`, body)
        .then(() => {
            setIsSucess(true)
        })
        .catch((error) => {
            console.log(error)
        })
}

export default applyToTrip