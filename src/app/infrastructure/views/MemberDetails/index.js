/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMemberDetailsActions } from './actions/creators'
import { deleteMemberActions } from '../Member/actions/creators'
import { useParams } from 'react-router-dom'
import { Modal } from '../../components'
import InfoLabel from './info-label'
import { Table } from 'react-bootstrap'

const MemberDetails = ({ history }) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [s, setState] = useState({
    del: false,
    update: false
  })

  // const [updateMember, setUpdateMember] = setState({

  // })

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

    history.push('/dashboard/member/')
  }

  useEffect(() => {
    dispatch(getMemberDetailsActions({ id }))
  }, [dispatch])

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
                    <th>
                      <i className="fas fa-angle-double-down" />
                    </th>
                    <th>Kitap Adı</th>
                    <th>Kitabın Yazarı</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <i className="fas fa-mouse" />
                    </td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fas fa-mouse" />
                    </td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fas fa-mouse" />
                    </td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
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
                <h4>Isim Soyisim </h4>
                <input value={memberDetails.user_name} />
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
