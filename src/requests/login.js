import axios from 'axios'
import { urlApi } from '../apiConfig/axiosConfig'


const login = (history, body, setMessage, setIsError) => {
  axios
    .post(
      `${urlApi}/login`,
      body
    )
    .then((res) => {
      window.localStorage.setItem('token', res.data.token)
      history.push('/admin/trips/list')
    })
    .catch((error) => {
      if (error.response) {
        setIsError(true)
        setMessage(error.response.data.message)
      }
    });

}

export default login