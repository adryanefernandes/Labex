import axios from 'axios'
import { urlApi, headersConfig } from '../apiConfig/axiosConfig'


const deleteTrip = (id, setTripWasDeleted) => {
  axios.delete(`${urlApi}/trips/${id}`, headersConfig)
    .then(() => {
      setTripWasDeleted(true)
    }).catch((err) => {
      alert('Viagem não apagada')
    })
}

export default deleteTrip