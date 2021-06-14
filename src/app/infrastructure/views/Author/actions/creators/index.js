import axios from 'axios'
import { AUTHOR_LIST_REQUEST, AUTHOR_LIST_SUCCESS, AUTHOR_LIST_FAIL } from '../types'

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
