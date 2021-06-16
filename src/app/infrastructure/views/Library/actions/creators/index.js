/* eslint-disable */
import axios from 'axios'
import {
  LIBRARY_ALL_LIST_REQUEST,
  LIBRARY_ALL_LIST_SUCCESS,
  LIBRARY_ALL_LIST_FAIL,
  LIBRARY_UPDATE_REQUEST,
  LIBRARY_UPDATE_SUCCESS,
  LIBRARY_UPDATE_FAIL,
  LIBRARY_DELETE_REQUEST,
  LIBRARY_DELETE_SUCCESS,
  LIBRARY_DELETE_FAIL,
  LIBRARY_ADD_REQUEST,
  LIBRARY_ADD_SUCCESS,
  LIBRARY_ADD_FAIL
} from '../types'

// @desc library list actions
export const libraryListActions = () => async (dispatch) => {
  try {
    dispatch({
      type: LIBRARY_ALL_LIST_REQUEST
    })

    const { data } = await axios
      .get(`${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/library`)
      .catch(function (error) {
        console.log(error)
      })

    dispatch({
      type: LIBRARY_ALL_LIST_SUCCESS,
      payload: data
    })

    localStorage.setItem('library', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: LIBRARY_ALL_LIST_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

// @desc library update actions
export const libraryUpdateActions = (id, name, adress) => async (dispatch) => {
  try {
    dispatch({
      type: LIBRARY_UPDATE_REQUEST
    })
    await axios
      .put(`${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/library/${id}`, {
        library_name: name,
        library_adress: adress
      })
      .catch(function (error) {
        console.log(error)
      })
    dispatch({
      type: LIBRARY_UPDATE_SUCCESS
    })
  } catch (error) {
    dispatch({
      type: LIBRARY_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

// @desc library delete actions
export const libraryDeleteActions = (id) => async (dispatch) => {
  try {
    dispatch({
      type: LIBRARY_DELETE_REQUEST
    })

    const { data } = await axios
      .delete(`${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/library/${id}`)
      .catch(function (error) {
        console.log(error)
      })

    dispatch({
      type: LIBRARY_DELETE_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: LIBRARY_DELETE_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

// @desc library add actions
export const libraryAddActions = (name, adress) => async (dispatch) => {
  try {
    dispatch({
      type: LIBRARY_ADD_REQUEST
    })

    const { data } = await axios
      .post(`${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/library`, {
        library_name: name,
        library_adress: adress
      })
      .catch(function (error) {
        console.log(error)
      })

    dispatch({
      type: LIBRARY_ADD_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: LIBRARY_ADD_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
