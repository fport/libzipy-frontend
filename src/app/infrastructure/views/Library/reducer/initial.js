const libraryFromStorage = localStorage.getItem('library')
  ? JSON.parse(localStorage.getItem('library'))
  : []

export default {
  libraryList: libraryFromStorage,
  message: null
}
