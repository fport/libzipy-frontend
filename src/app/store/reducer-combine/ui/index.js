import { combineReducers } from 'redux'
import { library } from './library'
import { books } from './books'
import { author } from './author'
import { member } from './member'

export const ui = combineReducers({
  library,
  books,
  author,
  member
})
