import {
  LIBRARY_DETAIL_LIST_REQUEST,
  LIBRARY_DETAIL_LIST_SUCCESS,
  LIBRARY_DETAIL_LIST_FAIL
} from '../actions/types'
import initial from './initial'

// @desc library list reducer
export const libraryDetailsReducer = (state = initial, action) => {
  switch (action.type) {
    case LIBRARY_DETAIL_LIST_REQUEST:
      return { loading: true }
    case LIBRARY_DETAIL_LIST_SUCCESS:
      return { loading: false, libraryDetails: action.payload }
    case LIBRARY_DETAIL_LIST_FAIL:
      return { loading: false }
    default:
      return state
  }
}
