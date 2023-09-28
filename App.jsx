import './App.css'
import Layout from   './components/layout'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from './pages/home'
import Shop from './pages/shop'
import Blog from './pages/blog'
import Contact from './pages/contact'
import About from './pages/about'
import Wishlist from './pages/wishlist'
import Accounts from './pages/accounts'
import Cart from './pages/cart'



function App() {


  return (
    <>
<BrowserRouter>
<Routes>

  <Route path='/' element={<Layout/>}>
<Route index element ={<Home/>}/>
<Route path='shop'element={<Shop/>}/>
<Route path='blog'element={<Blog/>}/>
<Route path='contact'element={<Contact/>}/>
<Route path='about'element={<About/>}/>
<Route path='cart' element={<Cart/>}/>
<Route path='wishlist' element={<Wishlist/>}/>
<Route path='accounts' element={<Accounts/>}/>


  </Route>
</Routes>

</BrowserRouter>
   
    </>
  )
}

export default App
