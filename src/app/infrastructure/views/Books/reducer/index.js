import {
  BOOK_LIST_REQUEST,
  BOOK_LIST_SUCCESS,
  BOOK_LIST_FAIL,
  ADD_BOOK_TO_LIBRARY_REQUEST,
  ADD_BOOK_TO_LIBRARY_SUCCESS,
  ADD_BOOK_TO_LIBRARY_FAIL,
  BOOK_DELETE_REQUEST,
  BOOK_DELETE_SUCCESS,
  BOOK_DELETE_FAIL
} from '../actions/types'
import initial from './initial'

// @desc library list reducer
export const booksReducer = (state = initial, action) => {
  switch (action.type) {
    case BOOK_LIST_REQUEST:
      return { ...state, loading: true }
    case BOOK_LIST_SUCCESS:
      return { ...state, loading: false, books: action.payload }
    case BOOK_LIST_FAIL:
      return { ...state, loading: false }
    case ADD_BOOK_TO_LIBRARY_REQUEST:
      return { ...state, loading: true }
    case ADD_BOOK_TO_LIBRARY_SUCCESS:
      return { ...state, loading: false, message: action.payload }
    case ADD_BOOK_TO_LIBRARY_FAIL:
      return { ...state, loading: false }
    case BOOK_DELETE_REQUEST:
      return { ...state, loading: true }
    case BOOK_DELETE_SUCCESS:
      return { ...state, loading: false, message: action.payload }
    case BOOK_DELETE_FAIL:
      return { ...state, loading: false }
    default:
      return state
  }
}
