import React from 'react'

function Tail({children,content}) {
  return (
    <>
    <div className='border-2 border-green-500'>

    {children}
    </div>
    {content}
    </>
  )
}

export default Tail