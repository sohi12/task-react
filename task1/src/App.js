import React from 'react'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Component/Home/Home'
import Contact from './Component/Contact/Contact'
import MasterLayout from './Component/MasterLayout/MasterLayout'
import About from './Component/About/About'
import Portfolio from './Component/Portfolio/Portfolio'

const routers = createBrowserRouter([
  {path:'' , element: <MasterLayout/> , children:[
    {path:'start', element :<Home/>},
    {path: 'about',element:<About/> },
    {path:'contact',element:<Contact/> },
    {path : "portfolio",element:<Portfolio/> },
  ]},

])
export default function App() {

  return (
    
  <>
  
 
  <RouterProvider router={routers}></RouterProvider>
  
  </>

  )
}
