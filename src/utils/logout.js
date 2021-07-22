import { goToLogin } from '../routes/coordinator'

export function logout(history) {
  window.localStorage.removeItem('token')
  goToLogin(history)
}