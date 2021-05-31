/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userListActions } from './actions/creators'
import { Link } from 'react-router-dom'

const Member = () => {
  const dispatch = useDispatch()

  const userLists = useSelector((state) => state.ui.member.memberReducer)
  const { users } = userLists

  useEffect(() => {
    dispatch(userListActions())
  }, [dispatch])

  return (
    <div>
      <table>
        <tbody>
          {users.map((user, id) => (
            <tr key={id}>
              <td>{user.user_name}</td>
              <td>{user.user_surname}</td>
              <td>{user.user_phonenumber}</td>
              <td>{user.user_email}</td>
              <td className="opration">
                <Link to={`member/${user.user_id}`}>
                  <button>Detaya Git</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Member
