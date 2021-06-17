import axios from 'axios'
import {
  BOOK_LIST_REQUEST,
  BOOK_LIST_SUCCESS,
  BOOK_LIST_FAIL,
  ADD_BOOK_TO_LIBRARY_REQUEST,
  ADD_BOOK_TO_LIBRARY_SUCCESS,
  ADD_BOOK_TO_LIBRARY_FAIL,
  BOOK_DELETE_REQUEST,
  BOOK_DELETE_SUCCESS,
  BOOK_DELETE_FAIL,
  BOOK_TYPE_LIST_REQUEST,
  BOOK_TYPE_LIST_SUCCESS,
  BOOK_TYPE_LIST_FAIL
} from '../types'

// @desc user list actions
export const getBooksListActions = () => async (dispatch) => {
  try {
    dispatch({
      type: BOOK_LIST_REQUEST
    })

    const { data } = await axios
      .get(`${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/book`)
      .catch(function (error) {
        console.log(error)
      })

    dispatch({
      type: BOOK_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: BOOK_LIST_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

// @desc book type list  actions
export const getBookTypeActions = () => async (dispatch) => {
  try {
    dispatch({
      type: BOOK_TYPE_LIST_REQUEST
    })

    const { data } = await axios
      .get(`${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/type`)
      .catch(function (error) {
        console.log(error)
      })

    dispatch({
      type: BOOK_TYPE_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: BOOK_TYPE_LIST_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

// @desc add book to library actions
export const addBookToLibraryActions = (name, pages, issue, publicaction, type, author) => async (
  dispatch
) => {
  try {
    dispatch({
      type: ADD_BOOK_TO_LIBRARY_REQUEST
    })

    const { data } = await axios
      .post(`${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/book`, {
        book_name: name,
        book_number_of_pages: pages,
        book_date_of_issue: issue,
        book_place_of_publication: publicaction,
        author_id: author,
        type_id: type
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

// @desc library delete actions
export const bookDeleteActions = (id) => async (dispatch) => {
  try {
    dispatch({
      type: BOOK_DELETE_REQUEST
    })

    const { data } = await axios
      .delete(`${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/book/${id}`)
      .catch(function (error) {
        console.log(error)
      })

    dispatch({
      type: BOOK_DELETE_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: BOOK_DELETE_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
