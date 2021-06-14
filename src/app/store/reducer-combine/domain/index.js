import { combineReducers } from 'redux'
import { dataReducer } from '../../../infrastructure/reducers/data-reducer'
import { loginReducer } from '../../../infrastructure/views/LoginPage/reducer'
import { userBorrowBooksListReducer } from '../../../infrastructure/views/MemeberBorrow/reducer'

export const domain = combineReducers({
  isLoggedIn: dataReducer,
  authToken: dataReducer,
  role: dataReducer,
  id: dataReducer,
  info: loginReducer,
  myBooks: userBorrowBooksListReducer
})
