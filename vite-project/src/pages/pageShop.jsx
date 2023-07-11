import React from 'react'
import Promo from '../components/Promo/Promo'
import CardShop from '../components/Shop/ChardShop'
import Footer from '../components/Header/footer'
import Nav from '../components/Header/Navbar'
import './pagecss/shop.css'



function PageShop() {
  


  return (
    <div className='app'>
        <Nav />
        <Promo />
        <CardShop />
        <Footer />
      </div>
  )
}

export default PageShop