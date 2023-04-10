import React from 'react'
import Navbar from './components/Header/Navbar'
import Footer from './components/Header/footer'
import Card1 from './components/Home/Card1'
import Foto1 from './components/Home/Foto1'
import Foto2 from './components/Home/Foto2'
import './Home.css'
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.bundle.min"
import './index.css'

function PageHome() {

  return (
    <div className='app'>
        <Navbar />
        <Card1/>
        <Foto1/>
        <Foto2/>
        <Footer />
    </div>
  )
}

export default PageHome
