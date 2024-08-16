import React from 'react'
import { useParams } from 'react-router-dom'

function Name() {
    const {username} = useParams()
  return (
    <div className='text-center w-full bg-gray-700 text-3xl text-white'>Your Name: <span className='text-yellow-400'>{username}</span> </div>
  )
}

export default Name