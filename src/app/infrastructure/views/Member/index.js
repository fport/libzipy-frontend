/* eslint-disable */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userListActions } from './actions/creators'

const Member = () => {
  const dispatch = useDispatch()

  const userList = useSelector((state) => state.ui.member.memberReducer)

  useEffect(() => {
    dispatch(userListActions())
  }, [dispatch])

  return (
    <div>
      <table>
        <tbody>
          {userList.users.map((user, id) => (
            <tr key={id}>
              <td>{user.user_name}</td>
              <td>{user.user_surname}</td>
              <td>{user.user_phonenumber}</td>
              <td>{user.user_email}</td>
              <td className="opration">
                <button>Open Modal</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Member
