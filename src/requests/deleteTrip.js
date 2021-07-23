import axios from 'axios'
import { urlApi } from '../apiConfig/axiosConfig'


const deleteTrip = (id, setTripWasDeleted) => {
  axios.delete(`${urlApi}/trips/${id}`, {
    headers: {
        auth: window.localStorage.getItem('token')
    }
  })
    .then(() => {
      setTripWasDeleted(true)
    }).catch((err) => {
      alert('Viagem não apagada')
    })
}

export default deleteTrip