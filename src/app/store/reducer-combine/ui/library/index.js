import { combineReducers } from 'redux'
import { libraryListReducer } from '../../../../infrastructure/views/Library/reducer'
import { libraryDetailsReducer } from '../../../../infrastructure/views/LibraryDetails/reducer'

export const library = combineReducers({
  libraryListReducer,
  libraryDetailsReducer
})
