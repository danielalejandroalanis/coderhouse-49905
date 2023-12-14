import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import { Home } from '../pages/Home'
import { ItemDetailContainer } from '../pages/ItemDetailContainer'
import { Category } from '../pages/Category'

export const MainRouter = () => {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/item/:productId' element={<ItemDetailContainer />}/>
            <Route path='/category/:id' element={<Category />}/>
        </Routes>
    </BrowserRouter>
  )
}


// https://myapp.com/ ---> Page Home
// https://myapp.com/category ---> Page Category

