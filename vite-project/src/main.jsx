import React from 'react'
import ReactDOM from 'react-dom/client'
import PageShop from './pageShop'
import PageLogin from './PageLogin'
import PagePackage from './PagePackage'
import PageHome from './PageHome'
import PageContact from './Contac'
import './shop.css'
import '@material-tailwind/react'
import './index.css'




import {
  createBrowserRouter,
  RouterProvider,
  Link
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageHome/>
  },
  {
    path: "/Shop",
    element: <PageShop/>
  },
  {
    path: "/Login",
    element: <PageLogin/>
  },
  {
    path: "/Package",
    element: <PagePackage/>
  },
  {
    path: "/Kontak",
    element: <PageContact/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
