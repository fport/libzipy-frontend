const usersFromStorage = localStorage.getItem('users')
  ? JSON.parse(localStorage.getItem('users'))
  : []

export default {
  users: usersFromStorage
}
