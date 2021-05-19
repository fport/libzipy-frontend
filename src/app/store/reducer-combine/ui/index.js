import { combineReducers } from 'redux'
import { library } from './library'
import { books } from './books'
import { author } from './author'

export const ui = combineReducers({
  library,
  books,
  author
})
