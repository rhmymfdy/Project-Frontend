import React from 'react'
import Navbar from '../components/Header/Navbar'
import CardOne from '../components/Home/Card-1'
import CardTwo from '../components/Home/Card-2'
import CardThre from '../components/Home/Card-3'
import Footer from '../components/Header/footer'

function PageHome() {

  return (
    <div className='app'>
        <Navbar />
        <CardOne/>
        <CardTwo/>
        <CardThre/>
        <Footer/>
    </div>
  )
}

export default PageHome
