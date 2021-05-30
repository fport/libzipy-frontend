/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userListActions } from './actions/creators'
import { Modal } from '../../components'

const Member = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const userList = useSelector((state) => state.ui.member.memberReducer)

  useEffect(() => {
    dispatch(userListActions())
  }, [dispatch])

  const openModel = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

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
                {open ? <Modal closeModal={() => closeModal()} /> : null}
                <button onClick={openModel}>Open Modal</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Member
