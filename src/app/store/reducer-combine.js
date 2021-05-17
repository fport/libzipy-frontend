import { combineReducers } from 'redux'
import { dataReducer } from '../infrastructure/reducers/data-reducer'

/* src/reducer rootunda olusturdugumuz reducerlarimizi combineReducer ile 
birlestiriyoruz. Redux DevTools kisminda gordugun stateler burdan geliyor */

export const reducer = combineReducers({
  viewData: dataReducer,
})