import { ADD_DATA, REMOVE_DATA } from '../types/data-constant'

export const addData = (data) => async (dispatch) => {
  dispatch({
    type: ADD_DATA,
    payload: data
  })

  localStorage.setItem('data', JSON.stringify(data))
}

export const removeData = () => async (dispatch) => {
  dispatch({
    type: REMOVE_DATA
  })

  localStorage.removeItem('data')
}