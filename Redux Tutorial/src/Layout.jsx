import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='h-screen w-screen flex flex-col'>
        <Navbar/>
        <Outlet></Outlet>
    </div>
  )
}

export default Layout