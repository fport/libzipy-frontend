import { combineReducers } from 'redux'
import { memberReducer } from '../../../../infrastructure/views/Member/reducer'

export const member = combineReducers({
  list: memberReducer
})
