import React, { useRef, useState } from 'react'

function Testing() {
    const [count,setCount] = useState(0)
    const countRef = useRef(0)
    const btnRef = useRef(0)
    // let top = 9;
    // console.log(top)
    function handleAdd(){
        setCount(prev=>prev+1)
        btnRef.current.style.width="100px"
        // top+=1
        // console.log("in add Function: ",top)
        countRef.current += 1
        console.log(countRef.current)
    }
    function handleMinus(){
        setCount(prev=>prev-1)
        // top-=1
        countRef.current -= 1
        console.log(countRef.current)
    }

  return (
    <div className='w-full h-[100vh] flex gap-3 justify-center items-center'>
        <button ref={btnRef} onClick={handleMinus} className='p-4 bg-green-400 rounded-lg'>-</button>
         {countRef.current},{count}
        <button onClick={handleAdd} className='p-4 bg-green-400 rounded-lg'>+</button>
    </div>
  )
}

export default Testing