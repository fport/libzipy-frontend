/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMemberDetailsActions } from './actions/creators'
import { deleteMemberActions, userUpdateActions } from '../Member/actions/creators'
import { useParams } from 'react-router-dom'
import { Modal } from '../../components'
import InfoLabel from './info-label'
import { Table } from 'react-bootstrap'
import { getMemberBorrowListActions } from '../MemeberBorrow/actions/creators'

const MemberDetails = ({ history }) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)

  // for form
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAdmin, setIsAdmin] = useState('')

  const [s, setState] = useState({
    del: false,
    update: false
  })

  const books = useSelector((state) => state.domain.myBooks.userBooks)

  const member = useSelector((state) => state.ui.member.memberDetailsReducer)
  const { memberDetails, loading } = member

  const openModel = () => {
    setOpen(true)
  }

  const deleteMemeber = () => {
    setState({ ...s, del: !s.del })
  }

  const updateMemeber = () => {
    setState({ ...s, update: !s.update })
  }

  const deleteHandle = () => {
    dispatch(deleteMemberActions({ id }))
    history.push('/dashboard/member')
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(userUpdateActions(id, name, surname, phone, email, password, isAdmin))
    setState({ ...s, update: !s.update })
    window.location.reload()
  }

  useEffect(() => {
    if (!memberDetails || !memberDetails.user_name) {
      dispatch(getMemberDetailsActions({ id }))
    } else {
      setName(memberDetails.user_name)
      setSurname(memberDetails.user_surname)
      setPhone(memberDetails.user_phonenumber)
      setEmail(memberDetails.user_email)
      setPassword(memberDetails.user_password)
      setIsAdmin(memberDetails.user_isadmin)
    }
  }, [dispatch, loading, id])

  useEffect(() => {
    dispatch(getMemberDetailsActions({ id }))
    dispatch(getMemberBorrowListActions(id))
  }, [dispatch, id])

  return (
    <>
      {loading ? (
        'loading'
      ) : memberDetails ? (
        <div className="details-container">
          <div className="details-wrapper">
            <div className="member-info">
              <InfoLabel
                className="member-info-item"
                title={'Isim Soyisim'}
                value={`${memberDetails.user_name} ${memberDetails.user_surname}`}
              />
              <InfoLabel title={'Email'} value={`${memberDetails.user_email}`} />
              <InfoLabel title={'Telefon Numarasi'} value={`${memberDetails.user_phonenumber}`} />
            </div>
            <div className="member-books">
              <span className="member-books-header">Ödünç Aldığı Kitaplar</span>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>ISBN ID</th>
                    <th>Kitap Adı</th>
                  </tr>
                </thead>
                <tbody>
                  {books &&
                    books.map((book, id) => (
                      <tr key={id}>
                        <td>{book.ISBN_id}</td>
                        <td>{book.book_name}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </div>
            {s.del ? (
              <Modal closeModal={() => deleteMemeber()}>
                <p onClick={() => deleteHandle()}>sil</p>
                <p className="delete-option" onClick={() => deleteMemeber()}>
                  vazgec
                </p>
              </Modal>
            ) : null}
            {s.update ? (
              <Modal closeModal={() => updateMemeber()}>
                <form onSubmit={submitHandler}>
                  <h4>Isim</h4>
                  <input value={name} onChange={(e) => setName(e.target.value)} />
                  <h4>Soyisim </h4>
                  <input value={surname} onChange={(e) => setSurname(e.target.value)} />
                  <h4>Telefon Numarasi</h4>
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} />
                  <h4>Email</h4>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} />
                  <h4>Sifre</h4>
                  <input value={password} onChange={(e) => setPassword(e.target.value)} />
                  <h4>Admin Status</h4>
                  <input value={isAdmin} onChange={(e) => setIsAdmin(e.target.value)} />
                  <button type="submit">Guncelle</button>
                </form>
              </Modal>
            ) : null}
            <div className="details-footer">
              <span className="details-text">Yapmak İstedğiniz İşlemi Seçiniz</span>
              <div className="options">
                <button className="btn-sm details-btn" onClick={deleteMemeber}>
                  Kullaniciyi Sil
                </button>
                <button className="btn-sm details-btn" onClick={updateMemeber}>
                  Guncelle
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        'yukleniyor'
      )}
    </>
  )
}

export default MemberDetails
