import { combineReducers } from 'redux'
import { domain } from './domain'
import { ui } from './ui'

/* src/reducer rootunda olusturdugumuz reducerlarimizi combineReducer ile 
birlestiriyoruz. Redux DevTools kisminda gordugun stateler burdan geliyor */

export const reducer = combineReducers({
  domain: domain,
  ui: ui
})
