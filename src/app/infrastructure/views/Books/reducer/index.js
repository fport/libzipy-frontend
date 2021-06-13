import { BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS, BOOK_LIST_FAIL } from '../actions/types'
import initial from './initial'

// @desc library list reducer
export const booksReducer = (state = initial, action) => {
  switch (action.type) {
    case BOOK_LIST_REQUEST:
      return { loading: true }
    case BOOK_LIST_SUCCESS:
      return { loading: false, books: action.payload }
    case BOOK_LIST_FAIL:
      return { loading: false }
    default:
      return state
  }
}
