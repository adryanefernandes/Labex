import axios from "axios"
import { urlApi } from '../apiConfig/axiosConfig'

function decideCandidate(body, tripId, candidateId) {
    axios.put(`${urlApi}/trips/${tripId}/candidates/${candidateId}/decide`, body, {
        headers: {
            auth: window.localStorage.getItem('token')
        }
    })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
}

export default decideCandidate