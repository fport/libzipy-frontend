import { combineReducers } from 'redux'
import { domain } from './domain'

/* src/reducer rootunda olusturdugumuz reducerlarimizi combineReducer ile 
birlestiriyoruz. Redux DevTools kisminda gordugun stateler burdan geliyor */

export const reducer = combineReducers({
  domain: domain
})
