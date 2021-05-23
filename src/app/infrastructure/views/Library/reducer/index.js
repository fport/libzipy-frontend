import {
  LIBRARY_ALL_LIST_REQUEST,
  LIBRARY_ALL_LIST_SUCCESS,
  LIBRARY_ALL_LIST_FAIL,
  LIBRARY_UPDATE_REQUEST,
  LIBRARY_UPDATE_SUCCESS,
  LIBRARY_UPDATE_FAIL,
  LIBRARY_DELETE_REQUEST,
  LIBRARY_DELETE_SUCCESS,
  LIBRARY_DELETE_FAIL
} from '../actions/types'
import initial from './initial'

// @desc library list reducer
export const libraryListReducer = (state = initial, action) => {
  switch (action.type) {
    case LIBRARY_ALL_LIST_REQUEST:
      return { loading: true }
    case LIBRARY_ALL_LIST_SUCCESS:
      return { loading: false, libraryList: action.payload }
    case LIBRARY_ALL_LIST_FAIL:
      return { loading: false }
    default:
      return state
  }
}

// @desc library update reducer
export const libraryUpdateReducer = (state = initial, action) => {
  switch (action.type) {
    case LIBRARY_UPDATE_REQUEST:
      return { loading: true }
    case LIBRARY_UPDATE_SUCCESS:
      return { loading: false, libraryList: action.payload }
    case LIBRARY_UPDATE_FAIL:
      return { loading: false }
    default:
      return state
  }
}

// @desc library delete reducer
export const libraryDeleteReducer = (state = initial, action) => {
  switch (action.type) {
    case LIBRARY_DELETE_REQUEST:
      return { loading: true }
    case LIBRARY_DELETE_SUCCESS:
      return { loading: false, libraryList: action.payload }
    case LIBRARY_DELETE_FAIL:
      return { loading: false }
    default:
      return state
  }
}
