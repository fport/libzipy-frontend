import { combineReducers } from 'redux'
import { dataReducer } from '../../../../infrastructure/reducers/data-reducer'

export const author = combineReducers({
  list: dataReducer
})
