import axios from 'axios'
import { USER_INFO_UPDATE_REQUEST, USER_INFO_UPDATE_SUCCESS, USER_INFO_UPDATE_FAIL } from '../types'

// @desc user update actions
export const updateMeDetailsAction = (id, name, surname, phone, email, password, isAdmin) => async (
  dispatch
) => {
  try {
    dispatch({
      type: USER_INFO_UPDATE_REQUEST
    })
    await axios
      .put(`${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/user/${id}`, {
        user_name: name,
        user_surname: surname,
        user_phonenumber: phone,
        user_email: email,
        user_password: password,
        user_isadmin: isAdmin,
        id
      })
      .catch(function (error) {
        console.log(error)
      })
    dispatch({
      type: USER_INFO_UPDATE_SUCCESS
    })
  } catch (error) {
    dispatch({
      type: USER_INFO_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
