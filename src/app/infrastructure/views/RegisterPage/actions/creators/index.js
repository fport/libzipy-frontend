/* eslint-disable */
import axios from 'axios'
import { USER_REGISTER_REQUEST, USER_REGISTER_FAIL, USER_REGISTER_SUCCESS } from '../types'

export const userRegisterActions = (name, surname, phone, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST
    })

    // const param =

    // // console.log('param', param)

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    const { data } = await axios
      .post(
        'http://localhost:5000/api/user',
        {
          user_name: name,
          user_surname: surname,
          user_phonenumber: phone,
          user_email: email,
          user_password: password
        },
        config
      )
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })

    // console.log('data =>', data)

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: { name, surname, phone, email, password }
    })
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
