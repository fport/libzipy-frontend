import { populerKategorisi } from '../assets'
// import { populerKategorisi, tarihKategorisi, cocukKategorisi, klasikKategori } from '../assets'
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
  }
]

const Category = () => {
  return (
    <div>
      <div>Categori</div>
      {kategoriler.map((kate) => (
        <div key={kate.id} className="category-container">
          <img className="category-img" src={populerKategorisi} alt={kate.name} />
        </div>
      ))}
    </div>
  )
}

export default Category
