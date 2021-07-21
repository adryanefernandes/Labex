export function currentDate() {
  let dateNow = new Date().toLocaleDateString()
  const yearNow = dateNow.substring(6)
  const monthNow = dateNow.substring(3, 5)
  const dayNow = dateNow.substring(0, 2)

  return `${yearNow}-${monthNow}-${dayNow}`
}