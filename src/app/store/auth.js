import { combineReducers } from 'redux'
import { dataReducer } from '../infrastructure/reducers/data-reducer'

export const auth = combineReducers({
  isLoggedIn: dataReducer,
  token: dataReducer,
  role: dataReducer,
  userId: dataReducer
})
