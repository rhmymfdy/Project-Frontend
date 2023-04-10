import React from 'react'
import './PagePackage.css'
import Navbar from './components/Header/Navbar'
import Footer from './components/Header/footer'
import User from './components/Package/User'
import Promo from './components/Promo/Promo'
// import "./index.css"

function PageLogin() {

  return (
    <div className='app'>
        <Navbar />
        <Promo/>
        <User />
        <Footer />
    </div>
  )
}

export default PageLogin
