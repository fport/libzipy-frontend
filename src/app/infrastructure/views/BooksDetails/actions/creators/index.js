import axios from 'axios'
import { BOOK_DETAILS_REQUEST, BOOK_DETAILS_SUCCESS, BOOK_DETAILS_FAIL } from '../types'

// @desc user list actions
export const getBooksDetailsActions = ({ id }) => async (dispatch) => {
  try {
    dispatch({
      type: BOOK_DETAILS_REQUEST
    })

    const { data } = await axios
      .get(`${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/book/${id}`)
      .catch(function (error) {
        console.log(error)
      })

    dispatch({
      type: BOOK_DETAILS_SUCCESS,
      payload: data[0]
    })
  } catch (error) {
    dispatch({
      type: BOOK_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

// export const getBooksAuthorActions = ({ id }) => async (dispatch) => {
//   try {
//     dispatch({
//       type: BOOK_DETAILS_REQUEST
//     })

//     const { data } = await axios
//       .get(`${process.env.REACT_APP_API_URL || 'http://localhost:8080'}/api/book/${id}`)
//       .catch(function (error) {
//         console.log(error)
//       })
//     dispatch({
//       type: BOOK_DETAILS_SUCCESS,
//       payload: data[0]
//     })
//   } catch (error) {
//     dispatch({
//       type: BOOK_DETAILS_FAIL,
//       payload:
//         error.response && error.response.data.message ? error.response.data.message : error.message
//     })
//   }
// }
