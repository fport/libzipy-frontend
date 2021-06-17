import {
  BOOK_DETAILS_REQUEST,
  BOOK_DETAILS_SUCCESS,
  BOOK_DETAILS_FAIL,
  BOOK_AUTHOR_DETAILS_REQUEST,
  BOOK_AUTHOR_DETAILS_SUCCESS,
  BOOK_AUTHOR_DETAILS_FAIL,
  BOOK_TYPE_DETAILS_REQUEST,
  BOOK_TYPE_DETAILS_SUCCESS,
  BOOK_TYPE_DETAILS_FAIL,
  BOOK_BORROW_REQUEST,
  BOOK_BORROW_SUCCESS,
  BOOK_BORROW_FAIL,
  BOOK_UPDATE_REQUEST,
  BOOK_UPDATE_SUCCESS,
  BOOK_UPDATE_FAIL
} from '../actions/types'
import initial from './initial'

// @desc library list reducer
export const booksDetailsReducer = (state = initial, action) => {
  switch (action.type) {
    case BOOK_DETAILS_REQUEST:
      return { ...state, loading: true }
    case BOOK_DETAILS_SUCCESS:
      return { ...state, loading: false, booksDetails: action.payload }
    case BOOK_DETAILS_FAIL:
      return { ...state, loading: false }
    case BOOK_AUTHOR_DETAILS_REQUEST:
      return { ...state, loading: true }
    case BOOK_AUTHOR_DETAILS_SUCCESS:
      return { ...state, loading: false, booksAuthor: action.payload }
    case BOOK_AUTHOR_DETAILS_FAIL:
      return { ...state, loading: false }
    case BOOK_TYPE_DETAILS_REQUEST:
      return { ...state, loading: true }
    case BOOK_TYPE_DETAILS_SUCCESS:
      return { ...state, loading: false, booksType: action.payload }
    case BOOK_TYPE_DETAILS_FAIL:
      return { ...state, loading: false }
    case BOOK_BORROW_REQUEST:
      return { ...state, loading: true }
    case BOOK_BORROW_SUCCESS:
      return { ...state, loading: false, booksBorrowStatus: action.payload }
    case BOOK_BORROW_FAIL:
      return { ...state, loading: false }
    case BOOK_UPDATE_REQUEST:
      return { ...state, loading: true }
    case BOOK_UPDATE_SUCCESS:
      return { ...state, loading: false, message: action.payload }
    case BOOK_UPDATE_FAIL:
      return { ...state, loading: false }
    default:
      return state
  }
}
