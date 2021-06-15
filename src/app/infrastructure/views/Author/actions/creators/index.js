import axios from 'axios'
import {
  AUTHOR_LIST_REQUEST,
  AUTHOR_LIST_SUCCESS,
  AUTHOR_LIST_FAIL,
  ADD_AUTHOR_REQUEST,
  ADD_AUTHOR_SUCCESS,
  ADD_AUTHOR_FAIL,
  AUTHOR_DELETE_REQUEST,
  AUTHOR_DELETE_SUCCESS,
  AUTHOR_DELETE_FAIL
} from '../types'

// @desc authot list actions
export const getAuthorListActions = () => async (dispatch) => {
  try {
    dispatch({
      type: AUTHOR_LIST_REQUEST
    })

    const { data } = await axios
      .get(`${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/author`)
      .catch(function (error) {
        console.log(error)
      })

    dispatch({
      type: AUTHOR_LIST_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: AUTHOR_LIST_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

// @desc add author actions
export const addAuthorActions = (name, surname, nationality, birthday) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_AUTHOR_REQUEST
    })

    const { data } = await axios
      .post(`${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/author`, {
        author_name: name,
        author_surname: surname,
        author_nationality: nationality,
        author_date_of_birth: birthday
      })
      .catch(function (error) {
        console.log(error)
      })

    dispatch({
      type: ADD_AUTHOR_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: ADD_AUTHOR_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

// @desc author delete actions
export const authorDeleteActions = (id) => async (dispatch) => {
  try {
    dispatch({
      type: AUTHOR_DELETE_REQUEST
    })

    const { data } = await axios
      .delete(`${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/author/${id}`)
      .catch(function (error) {
        console.log(error)
      })

    dispatch({
      type: AUTHOR_DELETE_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: AUTHOR_DELETE_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
