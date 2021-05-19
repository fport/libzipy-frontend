import { combineReducers } from 'redux'

export const auth = combineReducers({
  isLoggedIn: dataReducer,
  token: dataReducer,
  role: dataReducer,
  userId: dataReducer
})
