import axios from 'axios'
import {
  USER_BORROW_BOOKS_LIST_REQUEST,
  USER_BORROW_BOOKS_LIST_SUCCESS,
  USER_BORROW_BOOKS_LIST_FAIL
} from '../types'

// @desc user list actions
export const getMemberBorrowListActions = (id) => async (dispatch) => {
  try {
    dispatch({
      type: USER_BORROW_BOOKS_LIST_REQUEST
    })

    const { data } = await axios
      .get(`${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/user_book/${id}`)
      .catch(function (error) {
        console.log(error)
      })

    dispatch({
      type: USER_BORROW_BOOKS_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: USER_BORROW_BOOKS_LIST_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
