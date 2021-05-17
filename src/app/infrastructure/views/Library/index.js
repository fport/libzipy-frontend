import React, { useState } from 'react'
import { Card, Button, Tab, Tabs, InputGroup, FormControl } from 'react-bootstrap'
import { libraryA, libraryB, libraryC, libraryD } from '../../../assets'
import './Library.css'
import { Drawer } from '../../../infrastructure/components'

const kategoriler = [
  {
    id: 1,
    kategori: 'cocukKategorisi',
    name: 'A Kütüphanesi',
    path: libraryA
  },
  {
    id: 2,
    kategori: 'klasikKategori',
    name: 'B Kütüphanesi',
    path: libraryB
  },
  {
    id: 3,
    kategori: 'populerKategorisi',
    name: 'C Kütüphanesi',
    path: libraryC
  },
  {
    id: 4,
    kategori: 'tarihKategorisi',
    name: 'D Kütüphanesi',
    path: libraryD
  }
]

const Library = () => {
  const [isOpenAdd, setIsOpenAdd] = useState(false)
  const [isOpenDelete, setIsOpenDelete] = useState(false)
  const [isOpenUpdate, setIsOpenUpdate] = useState(false)

  const openAdd = () => {
    setIsOpenAdd(!isOpenAdd)
    setIsOpenDelete(false)
    setIsOpenUpdate(false)
  }
  const openDelete = () => {
    setIsOpenAdd(false)
    setIsOpenDelete(!isOpenDelete)
    setIsOpenUpdate(false)
  }
  const openUpdate = () => {
    setIsOpenAdd(false)
    setIsOpenDelete(false)
    setIsOpenUpdate(!isOpenUpdate)
  }

  return (
    <div>
      <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
        <Tab eventKey="home" title="Liste">
          <div className="category-container">
            {kategoriler.map((kate) => (
              <div key={kate.id} className="category-card">
                <Card style={{ width: '18rem' }}>
                  <Card.Img
                    className="category-img"
                    variant="top"
                    src={kate.path}
                    alt={kate.name}
                  />
                  <Card.Body>
                    <Card.Title>{kate.name}</Card.Title>
                    <Card.Text>
                      {kate.name} ile ilgileniyorsan tam sana göre yeni kitaplarımız geldi :D
                    </Card.Text>
                    <Button variant="primary">Kitapları görmek için tıkla</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Tab>
        <Tab eventKey="profile" title="İşlemler">
          <button onClick={openAdd}>{isOpenAdd ? 'Kapat' : 'Ekle'}</button>
          <button onClick={openDelete}>{isOpenDelete ? 'Kapat' : 'Sil'}</button>
          <button onClick={openUpdate}>{isOpenUpdate ? 'Kapat' : 'Güncelle'}</button>
          <div className="drawer">
            {isOpenAdd ? (
              <Drawer>
                <span>Kütüphane Ekle</span>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Drawer>
            ) : null}
            {isOpenDelete ? (
              <Drawer>
                <span>Kütüphane Sil</span>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Drawer>
            ) : null}
            {isOpenUpdate ? (
              <Drawer>
                <span>Kütüphaneyi Güncelle</span>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Drawer>
            ) : null}
          </div>
        </Tab>
      </Tabs>
    </div>
  )
}

export default Library
