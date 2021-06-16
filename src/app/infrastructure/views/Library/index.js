/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { libraryA } from '../../../assets'
import LibraryInfo from './library-label'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  libraryListActions,
  libraryDeleteActions,
  libraryAddActions,
  libraryUpdateActions
} from './actions/creators'
import { Modal } from '../../components'

const Library = ({ history }) => {
  const [s, setState] = useState({
    del: false,
    update: false,
    add: false
  })
  const [libraryName, setLibraryName] = useState('')
  const [libraryAdress, setLibraryAdress] = useState('')
  const [name, setName] = useState('')
  const [adress, setAdress] = useState('')
  const [id, setId] = useState('')

  const deleteMemeber = () => {
    setState({ ...s, del: !s.del })
  }

  const updateMemeber = (id, name, adress) => {
    setState({ ...s, update: !s.update })
    setName(name)
    setAdress(adress)
    setId(id)
  }

  const addMemeber = () => {
    setState({ ...s, add: !s.add })
  }

  const dispatch = useDispatch()
  const library = useSelector((state) => state.ui.library.libraryListReducer)
  const { libraryList, loading } = library
  const selectedData = useSelector((data) => data.domain.info.userInfo)

  const onClickHandle = (id) => {
    history.push(`library/${id}`)
  }

  const onClickDeleteHandle = (id) => {
    dispatch(libraryDeleteActions(id))
    dispatch(libraryListActions())
  }

  const onClickUpdateHandle = () => {
    dispatch(libraryUpdateActions(id, name, adress))
    setState({ ...s, update: !s.update })
    dispatch(libraryListActions())
  }

  const addSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(libraryAddActions(libraryName, libraryAdress))
    dispatch(libraryListActions())
    setState({ ...s, add: !s.add })
  }

  useEffect(() => {
    dispatch(libraryListActions())
  }, [dispatch])

  return (
    <div className="library-container">
      <div className="library-container-content">
        {selectedData.user_isadmin == 1 ? (
          <div className="add-library" onClick={() => addMemeber()}>
            <i className="fas fa-plus" />
          </div>
        ) : null}
        {s.add ? (
          <Modal title="Kütüphane Ekle" closeModal={() => addMemeber()}>
            <form onSubmit={addSubmitHandler}>
              <h4>Kütüphane Adı</h4>
              <input value={libraryName} onChange={(e) => setLibraryName(e.target.value)} />
              <h4>Kütüphane Adresi</h4>
              <input value={libraryAdress} onChange={(e) => setLibraryAdress(e.target.value)} />
              <button type="submit">Ekle</button>
            </form>
          </Modal>
        ) : null}
        {s.update ? (
          <Modal closeModal={() => updateMemeber()}>
            <form onSubmit={onClickUpdateHandle}>
              <h4>Kütüphane Adı</h4>
              <input value={name} onChange={(e) => setName(e.target.value)} />
              <h4>Kütüphane Adresi</h4>
              <input value={adress} onChange={(e) => setAdress(e.target.value)} />
              <button type="submit">Guncelle</button>
            </form>
          </Modal>
        ) : null}
        {libraryList
          ? libraryList.map((library, id) => (
              <div key={id} className="library-container-content-item">
                <div className="image-container">
                  <img src={libraryA} style={{ width: '200px', height: 'auto' }} />
                  <span className="centered">{library.library_name}</span>
                </div>
                <LibraryInfo title={library.library_name} value={library.library_adress} />
                <div className="library-container-item-left"></div>
                <div className="library-container-content-options">
                  <button className="btn-sm" onClick={() => onClickHandle(library.library_id)}>
                    Detay
                  </button>
                  {selectedData.user_isadmin == 1 ? (
                    <>
                      <button
                        className="option center"
                        onClick={() => onClickDeleteHandle(library.library_id)}
                      >
                        <i className="fas fa-trash-alt" />
                      </button>
                      <button
                        className="option center"
                        onClick={() =>
                          updateMemeber(
                            library.library_id,
                            library.library_name,
                            library.library_adress
                          )
                        }
                      >
                        <i className="fas fa-edit" />
                      </button>
                    </>
                  ) : null}
                </div>
              </div>
            ))
          : 'loading'}
      </div>
    </div>
  )
}

export default Library
