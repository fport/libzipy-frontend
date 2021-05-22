import {
  USER_ALL_LIST_REQUEST,
  USER_ALL_LIST_SUCCESS,
  USER_ALL_LIST_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL
} from '../actions/types'
import initial from './initial'

// @desc user list reducer
export const userListReducer = (state = initial, action) => {
  switch (action.type) {
    case USER_ALL_LIST_REQUEST:
      return { loading: true }
    case USER_ALL_LIST_SUCCESS:
      return { loading: false, usersList: action.payload }
    case USER_ALL_LIST_FAIL:
      return { loading: false }
    default:
      return state
  }
}

// @desc user update reducer
export const userUpdateReducer = (state = initial, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { loading: true }
    case USER_UPDATE_SUCCESS:
      return { loading: false, usersList: action.payload }
    case USER_UPDATE_FAIL:
      return { loading: false }
    default:
      return state
  }
}

// @desc user delete reducer
export const userDeleteReducer = (state = initial, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return { loading: true }
    case USER_DELETE_SUCCESS:
      return { loading: false, usersInfo: action.payload }
    case USER_DELETE_FAIL:
      return { loading: false }
    default:
      return state
  }
}
