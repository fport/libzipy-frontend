import { useState } from 'react'
import { Card, Button, Tab, Tabs, InputGroup, FormControl } from 'react-bootstrap'
import { populerKategorisi, tarihKategorisi, cocukKategorisi, klasikKategori } from '../../assets'
import './Category.css'
import { Drawer } from '../../components'

const kategoriler = [
  {
    id: 1,
    kategori: 'cocukKategorisi',
    name: 'Cocuk Kitap Kategorisi',
    path: cocukKategorisi
  },
  {
    id: 2,
    kategori: 'klasikKategori',
    name: 'Klasik Kitap Kategorisi',
    path: klasikKategori
  },
  {
    id: 3,
    kategori: 'populerKategorisi',
    name: 'Popüler Kitap Kategorisi',
    path: populerKategorisi
  },
  {
    id: 4,
    kategori: 'tarihKategorisi',
    name: 'Tarih Kitap Kategorisi',
    path: tarihKategorisi
  },
  {
    id: 5,
    kategori: 'populerKategorisi',
    name: 'Popüler Kitap Kategorisi',
    path: populerKategorisi
  },
  {
    id: 6,
    kategori: 'tarihKategorisi',
    name: 'Tarih Kitap Kategorisi',
    path: tarihKategorisi
  }
]

const Category = () => {
  const [isOpen, setIsOpen] = useState(false)

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
          <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Kapat' : 'Aç'}</button>
          <div className="drawer">
            {isOpen ? (
              <Drawer>
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
          </div>{' '}
        </Tab>
      </Tabs>
    </div>
  )
}

export default Category
