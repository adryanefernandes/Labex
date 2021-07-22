import axios from 'axios'
import { urlApi, headersConfig } from '../apiConfig/axiosConfig'

function createTrip(body, setIsSucess) {
    axios.post(`${urlApi}/trips`, body, headersConfig)
        .then((res) => {
            setIsSucess(true)
        }).catch((err) => {
            alert('Viagem não criada')
            console.log(err)
        })
}

export default createTrip