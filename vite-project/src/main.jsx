import React from 'react'
import ReactDOM from 'react-dom/client'
import '@material-tailwind/react'

import axios from 'axios'
axios.defaults.withCredentials = true

// Pages
import PageShop from './pages/pageShop'
import PageLogin from './pages/PageLogin'
import PagePackage from './pages/PagePackage'
import PageHome from './pages/PageHome'
import PageContact from './pages/Contac'
import SignUp from './pages/PageSignUp'
import LandingPage from './pages/LangingPage'
import Invoice from './pages/invoicePage'
import AddFrame from './components/Shop/addFrame'
import DetailProduk from './components/Package/ChardPackage'
import DetilFrame from './components/Shop/detil'
import PageAdmin from './pages/PageAdmin'
import IsiGalery from './components/Galery/IsiGalery'
import AddPackage from './components/Package/AddPackage'

// css
import './index.css'





import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";
import FinisSewa from './components/Package/FinisSewa'

const router = createBrowserRouter([
  {
    path: "/",
    element : <LandingPage/>
  },
  {
    path: "/home",
    element: <PageHome/>
  },
  {
    path: "/frame",
    element: <PageShop/>
  },
  {
    path: "/login",
    element: <PageLogin/>
  },
  {
    path: "/Package",
    element: <PagePackage/>
  },
  {
    path: "/Package/:id",
    element: <DetailProduk/>
  },
  {
    path: "/add",
    element: <AddPackage/>
  },
  {
    path: "/Finis",
    element: <FinisSewa/>
  },
  {
    path: "/kontak",
    element: <PageContact/>
  },
  {
    path:"/signup",
    element:<SignUp/>
  },
  {
    path:'/detil-frame/:id',
    element:<DetilFrame/>
  },
  {
    path:'/add-frame',
    element:<AddFrame/>
  },
  {
    path:'/invoice/:id',
    element:<Invoice/>
  },
  {
    path:'/admin',
    element:<PageAdmin/>
  },
  {
    path:'/galeri',
    element:<IsiGalery/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
