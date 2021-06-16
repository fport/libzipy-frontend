import {
  USER_INFO_UPDATE_REQUEST,
  USER_INFO_UPDATE_SUCCESS,
  USER_INFO_UPDATE_FAIL
} from '../actions/types'
import initial from './initial'

// @desc user  reducer
export const userMeDetailsReducer = (state = initial, action) => {
  switch (action.type) {
    case USER_INFO_UPDATE_REQUEST:
      return { ...state, loading: true }
    case USER_INFO_UPDATE_SUCCESS:
      return { ...state, loading: false, message: action.payload }
    case USER_INFO_UPDATE_FAIL:
      return { loading: false }
    default:
      return state
  }
}
