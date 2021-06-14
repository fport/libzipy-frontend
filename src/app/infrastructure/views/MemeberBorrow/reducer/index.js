import {
  USER_BORROW_BOOKS_LIST_REQUEST,
  USER_BORROW_BOOKS_LIST_SUCCESS,
  USER_BORROW_BOOKS_LIST_FAIL,
  USER_DELIVERED_BOOKS_LIST_REQUEST,
  USER_DELIVERED_BOOKS_LIST_SUCCESS,
  USER_DELIVERED_BOOKS_LIST_FAIL
} from '../actions/types'
import initial from './initial'

// @desc user  reducer
export const userBorrowBooksListReducer = (state = initial, action) => {
  switch (action.type) {
    case USER_BORROW_BOOKS_LIST_REQUEST:
      return { ...state, loading: true }
    case USER_BORROW_BOOKS_LIST_SUCCESS:
      return { ...state, loading: false, userBooks: action.payload }
    case USER_BORROW_BOOKS_LIST_FAIL:
      return { loading: false }
    case USER_DELIVERED_BOOKS_LIST_REQUEST:
      return { ...state, loading: true }
    case USER_DELIVERED_BOOKS_LIST_SUCCESS:
      return { ...state, loading: false, deleteSuccess: action.payload }
    case USER_DELIVERED_BOOKS_LIST_FAIL:
      return { loading: false }
    default:
      return state
  }
}
