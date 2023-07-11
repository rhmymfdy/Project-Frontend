import React from 'react'
import Nav from '../components/Header/Navbar'
import Footer from '../components/Header/footer'
import Promo from '../components/Promo/Promo'

import Product from '../components/Package/sewa'
function PageLogin() {

  return (
    <div className='app'>
        <Nav />
        <Promo/>
        <Product />
        <Footer />
    </div>
  )
}

export default PageLogin
