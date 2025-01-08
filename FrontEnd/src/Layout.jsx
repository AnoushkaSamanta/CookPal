import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function Layout() {
  const location = useLocation();
  const hide=location.pathname==="/"|| location.pathname==="/signup";
  return (
    <>
  
      {!hide && <Header/>}
      
      <Outlet/>
 
     { !hide && <Footer/>}
    </>
  )
}

export default Layout
