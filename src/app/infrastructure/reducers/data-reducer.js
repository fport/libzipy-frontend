import { ADD_DATA, REMOVE_DATA } from '../actions/types/data-constant'

export const dataReducer = (state = { viewData: { data: [] } }, action) => {
  switch (action.type) {
    case ADD_DATA:
      return { ...state, data: action.payload }
    case REMOVE_DATA:
      return { ...state, data: action.payload }
    default:
      return state
  }
}