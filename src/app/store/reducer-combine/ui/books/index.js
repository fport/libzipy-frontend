import { combineReducers } from 'redux'
import { booksReducer } from '../../../../infrastructure/views/Books/reducer'

export const books = combineReducers({
  booksReducer
})
