import {
  LIBRARY_DETAIL_LIST_REQUEST,
  LIBRARY_DETAIL_LIST_SUCCESS,
  LIBRARY_DETAIL_LIST_FAIL,
  ADD_BOOK_TO_LIBRARY_REQUEST,
  ADD_BOOK_TO_LIBRARY_SUCCESS,
  ADD_BOOK_TO_LIBRARY_FAIL,
  LIBRARY_DETAILS_BOOK_DELETE_REQUEST,
  LIBRARY_DETAILS_BOOK_DELETE_SUCCESS,
  LIBRARY_DETAILS_BOOK_DELETE_FAIL
} from '../actions/types'
import initial from './initial'

// @desc library list reducer
export const libraryDetailsReducer = (state = initial, action) => {
  switch (action.type) {
    case LIBRARY_DETAIL_LIST_REQUEST:
      return { ...state, loading: true }
    case LIBRARY_DETAIL_LIST_SUCCESS:
      return { ...state, loading: false, libraryDetails: action.payload }
    case LIBRARY_DETAIL_LIST_FAIL:
      return { ...state, loading: false }
    case ADD_BOOK_TO_LIBRARY_REQUEST:
      return { ...state, loading: true }
    case ADD_BOOK_TO_LIBRARY_SUCCESS:
      return { ...state, loading: false, message: action.payload }
    case ADD_BOOK_TO_LIBRARY_FAIL:
      return { ...state, loading: false }
    case LIBRARY_DETAILS_BOOK_DELETE_REQUEST:
      return { ...state, loading: true }
    case LIBRARY_DETAILS_BOOK_DELETE_SUCCESS:
      return { ...state, loading: false, message: action.payload }
    case LIBRARY_DETAILS_BOOK_DELETE_FAIL:
      return { ...state, loading: false }
    default:
      return state
  }
}
