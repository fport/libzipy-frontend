import {
  AUTHOR_LIST_REQUEST,
  AUTHOR_LIST_SUCCESS,
  AUTHOR_LIST_FAIL,
  ADD_AUTHOR_REQUEST,
  ADD_AUTHOR_SUCCESS,
  ADD_AUTHOR_FAIL,
  AUTHOR_DELETE_REQUEST,
  AUTHOR_DELETE_SUCCESS,
  AUTHOR_DELETE_FAIL
} from '../actions/types'
import initial from './initial'

// @desc author list reducer
export const authorReducer = (state = initial, action) => {
  switch (action.type) {
    case AUTHOR_LIST_REQUEST:
      return { ...state, loading: true }
    case AUTHOR_LIST_SUCCESS:
      return { ...state, loading: false, authors: action.payload }
    case AUTHOR_LIST_FAIL:
      return { ...state, loading: false }
    case ADD_AUTHOR_REQUEST:
      return { ...state, loading: true }
    case ADD_AUTHOR_SUCCESS:
      return { ...state, loading: false, message: action.payload }
    case ADD_AUTHOR_FAIL:
      return { ...state, loading: false }
    case AUTHOR_DELETE_REQUEST:
      return { ...state, loading: true }
    case AUTHOR_DELETE_SUCCESS:
      return { ...state, loading: false, message: action.payload }
    case AUTHOR_DELETE_FAIL:
      return { ...state, loading: false }
    default:
      return state
  }
}
