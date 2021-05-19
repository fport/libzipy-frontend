/* localstorage'a daha data eklendi 'se bunu localstorage'a ekliyoruz ve
uygulamayi tekrardan kullanici geri dondugunde bu datayi alip initial state'e koyuyoruz
gelen datayi kaydettigimiz datayi cekip initial state yerlestiriyoruz */

// const dataFromStorage = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : []
import info from '../views/LoginPage/reducer/initial'

//  Uygulama ilk calistiginda baslangic state'i
export const initialState = {
  domain: {
    auth: {
      isLoggedIn: [],
      token: [],
      role: [],
      id: [],
      info
    },
    library: [],
    books: [],
    author: []
  }
}
