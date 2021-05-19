import { combineReducers } from 'redux'
import { auth } from './auth'
import { library } from './library'
import { books } from './books'
import { author } from './author'

export const domain = combineReducers({
  auth,
  library,
  books,
  author
})
