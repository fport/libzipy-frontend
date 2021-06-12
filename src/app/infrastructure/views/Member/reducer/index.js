import {
  USER_ALL_LIST_REQUEST,
  USER_ALL_LIST_SUCCESS,
  USER_ALL_LIST_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  MEMBER_REMOVE_REQUEST,
  MEMBER_REMOVE_SUCCESS,
  MEMBER_REMOVE_FAIL
} from '../actions/types'
import initial from './initial'

// @desc user  reducer
export const memberReducer = (state = initial, action) => {
  switch (action.type) {
    case USER_ALL_LIST_REQUEST:
      return { ...state, loading: true }
    case USER_ALL_LIST_SUCCESS:
      return { ...state, loading: false, users: action.payload }
    case USER_ALL_LIST_FAIL:
      return { loading: false }
    case USER_UPDATE_REQUEST:
      return { ...state, loading: true }
    case USER_UPDATE_SUCCESS:
      return { ...state, loading: false, users: action.payload }
    case USER_UPDATE_FAIL:
      return { loading: false }
    case MEMBER_REMOVE_REQUEST:
      return { ...state, loading: true }
    case MEMBER_REMOVE_SUCCESS:
      return { ...state, loading: false, users: state.users.filter((x) => x.id !== action.payload) }
    case MEMBER_REMOVE_FAIL:
      return { loading: false }
    default:
      return state
  }
}
