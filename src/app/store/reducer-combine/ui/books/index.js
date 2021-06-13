import { combineReducers } from 'redux'
import { booksReducer } from '../../../../infrastructure/views/Books/reducer'
import { booksDetailsReducer } from '../../../../infrastructure/views/BooksDetails/reducer'

export const books = combineReducers({
  booksReducer,
  booksDetailsReducer
})
