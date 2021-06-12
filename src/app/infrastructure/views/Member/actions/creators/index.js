import axios from 'axios'
import {
  USER_ALL_LIST_REQUEST,
  USER_ALL_LIST_SUCCESS,
  USER_ALL_LIST_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  MEMBER_REMOVE_REQUEST,
  MEMBER_REMOVE_SUCCESS,
  MEMBER_REMOVE_FAIL
} from '../types'

// @desc user list actions
export const userListActions = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_ALL_LIST_REQUEST
    })

    const { data } = await axios
      .get(`${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/user`)
      .catch(function (error) {
        console.log(error)
      })

    dispatch({
      type: USER_ALL_LIST_SUCCESS,
      payload: data
    })

    localStorage.setItem('users', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_ALL_LIST_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

// @desc user update actions
export const userUpdateActions = (id, name, surname, phone, email, password, isAdmin) => async (
  dispatch
) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST
    })
    console.log('name', id)
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
      type: USER_UPDATE_SUCCESS
    })
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

// @desc user remove actions
export const deleteMemberActions = ({ id }) => async (dispatch) => {
  try {
    dispatch({
      type: MEMBER_REMOVE_REQUEST
    })

    await axios
      .delete(`${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/user/${id}`)
      .catch(function (error) {
        console.log(error)
      })

    dispatch({
      type: MEMBER_REMOVE_SUCCESS,
      payload: id
    })
  } catch (error) {
    dispatch({
      type: MEMBER_REMOVE_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
