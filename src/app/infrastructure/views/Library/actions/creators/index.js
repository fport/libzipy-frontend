import {
  LIBRARY_ALL_LIST_REQUEST,
  LIBRARY_ALL_LIST_SUCCESS,
  LIBRARY_ALL_LIST_FAIL,
  LIBRARY_UPDATE_REQUEST,
  LIBRARY_UPDATE_SUCCESS,
  LIBRARY_UPDATE_FAIL,
  LIBRARY_DELETE_REQUEST,
  LIBRARY_DELETE_SUCCESS,
  LIBRARY_DELETE_FAIL
} from '../types'

// @desc library list actions
export const libraryListActions = () => async (dispatch) => {
  try {
    dispatch({
      type: LIBRARY_ALL_LIST_REQUEST
    })

    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }

    // const { data } = await axios.post('/api/users/login', { email, password }, config)

    dispatch({
      type: LIBRARY_ALL_LIST_SUCCESS
    })

    // localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: LIBRARY_ALL_LIST_FAIL
      // payload:
      //   error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

// @desc library update actions
export const libraryUpdateActions = (_id) => async (dispatch) => {
  try {
    dispatch({
      type: LIBRARY_UPDATE_REQUEST
    })

    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }

    // const { data } = await axios.post('/api/users/login', { email, password }, config)

    dispatch({
      type: LIBRARY_UPDATE_SUCCESS
    })
    // payload: data

    // localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: LIBRARY_UPDATE_FAIL
      // payload:
      //   error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

// @desc library delete actions
export const userDeleteActions = (_id) => async (dispatch) => {
  try {
    dispatch({
      type: LIBRARY_DELETE_REQUEST
    })

    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }

    // const { data } = await axios.post('/api/users/login', { email, password }, config)

    dispatch({
      type: LIBRARY_DELETE_SUCCESS
    })

    // localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: LIBRARY_DELETE_FAIL
      // payload:
      //   error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
