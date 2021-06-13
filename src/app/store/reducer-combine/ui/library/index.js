import { combineReducers } from 'redux'
import { libraryListReducer } from '../../../../infrastructure/views/Library/reducer'

export const library = combineReducers({
  libraryListReducer
})
