import React from 'react'
import Nav from './components/Header/Navbar'
import Promo from './components/Promo/Promo'
import CardShop from './components/Shop/ChardShop'
import Footer from './components/Header/footer'
import './shop.css'


function PageShop() {

  return (
    <div className='app'>
        <Nav />
        <div>
          <Promo />
          <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
            <CardShop nama = 'Frame Putih Minimalist' harga = 'Rp.200.000' gambar = 'frame 1.jpg' />
            <CardShop nama = 'Frame Putih Glamour' harga = 'Rp.300.000' gambar = 'frame2.jpg' />
            <CardShop nama = 'Frame PINK Minimalist' harga = 'Rp.200.000' gambar = 'frame3.jpg' />
            <CardShop nama = 'Frame Putih Minimalist' harga = 'Rp.200.000' gambar = 'frame4.jpg' />
            <CardShop nama = 'Frame Putih Minimalist' harga = 'Rp.200.000' gambar = 'frame 1.jpg' />
            <CardShop nama = 'Frame Putih Minimalist' harga = 'Rp.200.000' gambar = 'frame2.jpg' />
            <CardShop nama = 'Frame Putih Minimalist' harga = 'Rp.200.000' gambar = 'frame3.jpg' />
            <CardShop nama = 'Frame Putih Minimalist' harga = 'Rp.200.000' gambar = 'frame4.jpg' />
            <CardShop nama = 'Frame Putih Minimalist' harga = 'Rp.200.000' gambar = 'frame 1.jpg' />
            <CardShop nama = 'Frame Putih Minimalist' harga = 'Rp.200.000' gambar = 'frame2.jpg' />
            <CardShop nama = 'Frame Putih Minimalist' harga = 'Rp.200.000' gambar = 'frame3.jpg' />
            <CardShop nama = 'Frame Putih Minimalist' harga = 'Rp.200.000' gambar = 'frame4.jpg' />
            </div>
        <Footer />
        </div>
      </div>
  )
}

export default PageShop
