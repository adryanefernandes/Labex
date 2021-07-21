import { useLayoutEffect } from 'react'
import { useHistory } from 'react-router-dom'

function useProtectedPage() {
  const history = useHistory()

  useLayoutEffect(() => {
    const token = window.localStorage.getItem('token')

    if(!token){
      history.push('/login')
    }
  }, [history])

  return
}

export default useProtectedPage