import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-gray-600 w-[50rem] h-[50rem] flex items-center">
        <button className="bg-blue-500 text-white " onClick={() => setCount((count) => count + 1)}>
          -
        </button>
        <button className="bg-blue-500 text-white " onClick={() => setCount((count) => count + 1)}>
          Reset
        </button>
        <button className="bg-blue-500 text-white " onClick={() => setCount((count) => count + 1)}>
          +
        </button>
      </div>
      <span className='text-xl'>{count}</span>

    </>
  )
}

export default App
