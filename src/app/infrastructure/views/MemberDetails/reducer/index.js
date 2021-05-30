import {
  MEMBER_DETAIL_LIST_REQUEST,
  MEMBER_DETAIL_LIST_SUCCESS,
  MEMBER_DETAIL_LIST_FAIL
} from '../actions/types'
import initial from './initial'

// @desc user  reducer
export const memberDetailsReducer = (state = initial, action) => {
  switch (action.type) {
    case MEMBER_DETAIL_LIST_REQUEST:
      return { ...state, loading: true }
    case MEMBER_DETAIL_LIST_SUCCESS:
      return { ...state, loading: false, memberDetails: action.payload }
    case MEMBER_DETAIL_LIST_FAIL:
      return { loading: false }
    default:
      return state
  }
}
