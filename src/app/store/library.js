import { combineReducers } from 'redux'
import { dataReducer } from '../infrastructure/reducers/data-reducer'

export const library = combineReducers({
  list: dataReducer
})
