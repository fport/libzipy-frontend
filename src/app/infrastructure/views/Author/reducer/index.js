import { AUTHOR_LIST_REQUEST, AUTHOR_LIST_SUCCESS, AUTHOR_LIST_FAIL } from '../actions/types'
import initial from './initial'

// @desc author list reducer
export const authorReducer = (state = initial, action) => {
  switch (action.type) {
    case AUTHOR_LIST_REQUEST:
      return { loading: true }
    case AUTHOR_LIST_SUCCESS:
      return { loading: false, authors: action.payload }
    case AUTHOR_LIST_FAIL:
      return { loading: false }
    default:
      return state
  }
}
