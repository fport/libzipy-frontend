import { combineReducers } from 'redux'
import { dataReducer } from '../../../infrastructure/reducers/data-reducer'

export const domain = combineReducers({
  isLoggedIn: dataReducer,
  authToken: dataReducer,
  role: dataReducer,
  id: dataReducer,
  info: dataReducer
})
