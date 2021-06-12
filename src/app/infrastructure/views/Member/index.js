/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userListActions } from './actions/creators'
import { Table } from 'react-bootstrap'

const Member = ({ history }) => {
  const dispatch = useDispatch()

  const userLists = useSelector((state) => state.ui.member.memberReducer)
  const { users } = userLists

  const onClickHandle = (id) => {
    history.push(`member/${id}`)
  }

  useEffect(() => {
    dispatch(userListActions())
  }, [users])

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Ad</th>
            <th>Soyad</th>
            <th>Telefon Numarası</th>
            <th>Email</th>
            <th>
              <i className="fas fa-angle-double-down" />
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, id) => (
            <tr key={id}>
              <td>{user.user_name}</td>
              <td>{user.user_surname}</td>
              <td>{user.user_phonenumber}</td>
              <td>{user.user_email}</td>
              <td className="opration">
                <button className="btn-sm" onClick={() => onClickHandle(user.user_id)}>
                  Detaya Git
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Member
