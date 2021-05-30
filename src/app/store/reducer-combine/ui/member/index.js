import { combineReducers } from 'redux'
import { memberReducer } from '../../../../infrastructure/views/Member/reducer'
import { memberDetailsReducer } from '../../../../infrastructure/views/MemberDetails/reducer'

export const member = combineReducers({
  memberReducer,
  memberDetailsReducer
})
