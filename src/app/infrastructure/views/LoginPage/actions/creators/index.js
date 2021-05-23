/* eslint-disable */
import axios from 'axios'
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from '../types'

export const userLoginActions = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST
    })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.get('http://localhost:5000/api/user', config)

    const isChecked = data.map((user) => {
      return user.user_email == email && user.user_password == password
    })
    console.log(isChecked)
    console.log('data =>', data)
    console.log('email, password  =>', email, password)

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: name
    })

    // localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL
      // payload:
      //   error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
