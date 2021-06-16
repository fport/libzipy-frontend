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
      return { ...state, loading: true }
    case LIBRARY_ALL_LIST_SUCCESS:
      return { ...state, loading: false, libraryList: action.payload }
    case LIBRARY_ALL_LIST_FAIL:
      return { ...state, loading: false }
    case LIBRARY_UPDATE_REQUEST:
      return { ...state, loading: true }
    case LIBRARY_UPDATE_SUCCESS:
      return { ...state, loading: false, message: action.payload }
    case LIBRARY_UPDATE_FAIL:
      return { ...state, loading: false }
    case LIBRARY_DELETE_REQUEST:
      return { ...state, loading: true }
    case LIBRARY_DELETE_SUCCESS:
      return { ...state, loading: false, message: action.payload }
    case LIBRARY_DELETE_FAIL:
      return { ...state, loading: false }
    default:
      return state
  }
}
