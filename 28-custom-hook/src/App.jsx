import { useState } from 'react'
import './App.css'
import { useTheme } from './hooks/Theme'

function App() {
  const [count, setCount] = useState(0)
  const [theme,toogleTheme] = useTheme()

  return (
    <>
      <div className="flex h-[100vh] w-full items-center justify-center gap-4">
        <button className='p-2 bg-blue-400 hover:bg-blue-500 rounded-md' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button className='p-2 bg-blue-400 hover:bg-blue-500 rounded-md' onClick={() => toogleTheme()}>
          Toogle Theme
        </button>
        <p>
          {theme}
        </p>
      </div>

    </>
  )
}

export default App
