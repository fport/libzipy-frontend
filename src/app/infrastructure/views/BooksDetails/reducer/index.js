import { BOOK_DETAILS_REQUEST, BOOK_DETAILS_SUCCESS, BOOK_DETAILS_FAIL } from '../actions/types'
import initial from './initial'

// @desc library list reducer
export const booksDetailsReducer = (state = initial, action) => {
  switch (action.type) {
    case BOOK_DETAILS_REQUEST:
      return { loading: true }
    case BOOK_DETAILS_SUCCESS:
      return { loading: false, booksDetails: action.payload }
    case BOOK_DETAILS_FAIL:
      return { loading: false }
    default:
      return state
  }
}
