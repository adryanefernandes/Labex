export const goToAdminHome = (history) => {
  history.push('/admin/trips/list')
}

export const goToLogin = (history) => {
  history.push(`/login`)
}

export const goToHome = (history) => {
  history.push('/')
}

export const goToApplication = (history) => {
  history.push('/trips/application')
}

export const goToTripDatailsPage = (history, id) => {
  history.push(`/admin/trips/${id}`)
}

export const goToCreateTrip = (history) => {
  history.push(`/admin/trips/create`)
}

