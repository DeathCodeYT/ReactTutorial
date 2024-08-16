import React from 'react'

function Button({children,handleClickButton}) {
  return (
    <button onClick={handleClickButton} className='w-[5rem] h-[5rem] rounded-lg border-2 hover:bg-gray-200 active:scale-75 transition-all shadow-md'>{children}</button>
  )
}

export default Button