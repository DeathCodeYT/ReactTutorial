import React from 'react'
import {  NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav className='flex items-center justify-between bg-slate-800 p-2'>
      <span className='text-white font-bold text-3xl'>Task Manager</span>
      <div className='flex items-center gap-10 text-white'>
        <NavLink className={({isActive})=>`hover:text-blue-600 ${isActive&&"text-blue-500"}`} to='/'>Home</NavLink>
        <NavLink className={({isActive})=>`hover:text-blue-600 ${isActive&&"text-blue-500"}`}  to='/about'>About</NavLink>
        <NavLink className={({isActive})=>`hover:text-blue-600 ${isActive&&"text-blue-500"}`} to='/contact'>Contact</NavLink>
        <NavLink className={({isActive})=>`hover:text-blue-600 ${isActive&&"text-blue-500"}`} to='/name'>Name</NavLink>
      </div>
      <div className='flex items-center gap-2 bg-white p-2'>
        <input className='border-none active:outline-none focus:outline-none' type="text" placeholder='Search' />
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search text-black" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </div>
    </nav>
  )
}

export default Navbar