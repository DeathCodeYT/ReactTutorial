import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCount, incrementCount, reset } from './features/count/countSlice'

function App() {
  const count = useSelector(state=>state.count)
  const dispatch = useDispatch()

  return (
    <>
      <div className="bg-gray-600 w-[50rem] h-[50rem] flex items-center justify-center gap-2 rounded-md">
        <button className="bg-blue-500 text-white rounded-md p-4" onClick={()=>dispatch(decrementCount(3))}>
          -
        </button>
        <button className="bg-blue-500 text-white rounded-md p-4" onClick={() => dispatch(reset())}>
          Reset
        </button>
        <button className="bg-blue-500 text-white rounded-md p-4" onClick={() =>dispatch(incrementCount(5))}>
          +
        </button>
      <span className='text-2xl text-white'>{count}</span>
      </div>

    </>
  )
}

export default App
