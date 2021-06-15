import axios from 'axios'
import {
  LIBRARY_DETAIL_LIST_REQUEST,
  LIBRARY_DETAIL_LIST_SUCCESS,
  LIBRARY_DETAIL_LIST_FAIL,
  ADD_BOOK_TO_LIBRARY_REQUEST,
  ADD_BOOK_TO_LIBRARY_SUCCESS,
  ADD_BOOK_TO_LIBRARY_FAIL
} from '../types'

// @desc user list actions
export const getLibraryDetailsActions = ({ id }) => async (dispatch) => {
  try {
    dispatch({
      type: LIBRARY_DETAIL_LIST_REQUEST
    })

    const { data } = await axios
      .get(`${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/library_book/${id}`)
      .catch(function (error) {
        console.log(error)
      })

    dispatch({
      type: LIBRARY_DETAIL_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: LIBRARY_DETAIL_LIST_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

// @desc add book to library actions
export const addBookToLibraryActions = (id, isbn) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_BOOK_TO_LIBRARY_REQUEST
    })

    const { data } = await axios
      .post(`${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/library_book`, {
        library_id: id,
        ISBN_id: isbn
      })
      .catch(function (error) {
        console.log(error)
      })

    dispatch({
      type: ADD_BOOK_TO_LIBRARY_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ADD_BOOK_TO_LIBRARY_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
