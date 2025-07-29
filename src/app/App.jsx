import React from 'react'
import {Route, Routes} from 'react-router'
import Layout from './pages/layout/layout'
import Home from './pages/home/home'
import Contact from './pages/contact/contact'
import About from './pages/about/about'
import SignUp from './pages/auth/signUp/signUp'
import Wishlist from './pages/wishlist/wishlist'
import Karzinka from './pages/karzinka/karzinka'
import Account from './pages/account/account'
import Login from './pages/auth/login/login'
import Products from './pages/products/products'
import Info from './pages/info/info'
import Checkout from './pages/checkout/checkout'
const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
                <Route path='sign-up' element={<SignUp />} />
                <Route path='/wishnist' element={<Wishlist />} />
                <Route path='/karzinka' element={<Karzinka />} />
                <Route path='/wishlist' element={<Wishlist />} /> 
                <Route path='/account/:id' element={<Account />} />
                <Route path='/login' element={<Login />} />
                <Route path='/product' element={<Products />} />
                <Route path='/info/:id' element={<Info />} />
                <Route path='/checkout' element={<Checkout />} />
            </Route>
        </Routes>
    </div>
  )
}

export default App