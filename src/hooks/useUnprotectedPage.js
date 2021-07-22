import { useLayoutEffect } from 'react'
import { goToAdminHome } from '../routes/coordinator'

export function useUnprotectePage(history) {
  const token = window.localStorage.getItem('token')

  useLayoutEffect(() => {
    if (token) {
      goToAdminHome(history)
    }
  }, [history, token])
}