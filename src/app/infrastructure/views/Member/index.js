import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userListActions } from './actions/creators'

// import { Table } from 'react-bootstrap'

const Member = () => {
  const dispatch = useDispatch()

  const userList = useSelector((state) => state.ui.member.memberReducer)

  useEffect(() => {
    dispatch(userListActions())
  }, [dispatch])

  return (
    <div>
      {userList.users.map((user, id) => (
        <div key={id}>{user.user_name}</div>
      ))}
    </div>
  )
}

export default Member
