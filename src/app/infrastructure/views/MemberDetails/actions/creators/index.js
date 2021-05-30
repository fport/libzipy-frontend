import axios from 'axios'
import {
  MEMBER_DETAIL_LIST_REQUEST,
  MEMBER_DETAIL_LIST_SUCCESS,
  MEMBER_DETAIL_LIST_FAIL
} from '../types'

// @desc user list actions
export const getMemberDetailsActions = ({ id }) => async (dispatch) => {
  try {
    dispatch({
      type: MEMBER_DETAIL_LIST_REQUEST
    })

    const { data } = await axios
      .get(`${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/user/${id}`)
      .catch(function (error) {
        console.log(error)
      })

    dispatch({
      type: MEMBER_DETAIL_LIST_SUCCESS,
      payload: data[0]
    })
  } catch (error) {
    dispatch({
      type: MEMBER_DETAIL_LIST_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
