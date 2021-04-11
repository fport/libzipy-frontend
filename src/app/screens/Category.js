import { populerKategorisi } from '../assets'
import { Card, Button } from 'react-bootstrap'
// import { populerKategorisi, tarihKategorisi, cocukKategorisi, klasikKategori } from '../assets'
import './Category.css'

const kategoriler = [
  {
    id: 1,
    kategori: 'cocukKategorisi',
    name: 'Cocuk Kitap Kategorisi'
  },
  {
    id: 2,
    kategori: 'klasikKategori',
    name: 'Klasik Kitap Kategorisi'
  },
  {
    id: 3,
    kategori: 'populerKategorisi',
    name: 'Popüler Kitap Kategorisi'
  },
  {
    id: 4,
    kategori: 'tarihKategorisi',
    name: 'Tarih Kitap Kategorisi'
  },
  {
    id: 5,
    kategori: 'populerKategorisi',
    name: 'Popüler Kitap Kategorisi'
  },
  {
    id: 6,
    kategori: 'tarihKategorisi',
    name: 'Tarih Kitap Kategorisi'
  }
]

const Category = () => {
  return (
    <div>
      <div className="category-container">
        {kategoriler.map((kate) => (
          <div key={kate.id} className="category-card">
            <Card style={{ width: '18rem' }}>
              <Card.Img
                className="category-img"
                variant="top"
                src={populerKategorisi}
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
    </div>
  )
}

export default Category
