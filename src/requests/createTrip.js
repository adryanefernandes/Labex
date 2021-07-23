import axios from 'axios'
import { urlApi } from '../apiConfig/axiosConfig'

function createTrip(body, setIsSucess) {
    axios.post(`${urlApi}/trips`, body, {
        headers: {
            auth: window.localStorage.getItem('token')
        }
      })
        .then((res) => {
            setIsSucess(true)
        }).catch((err) => {
            alert('Viagem não criada')
            console.log(err)
        })
}

export default createTrip