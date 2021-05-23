/* eslint-disable */
import axios from 'axios'
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from '../types'

export const userLoginActions = ({ email, password }) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST
    })

    const { data } = await axios.get('http://localhost:5000/api/user').catch(function (error) {
      console.log(error)
    })

    const isChecked = data.filter((user) => user.user_email == email)

    if (isChecked.length) {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: isChecked[0]
      })
    } else {
      throw new Error('not found user')
    }

    // localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL
      // payload:
      //   error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
