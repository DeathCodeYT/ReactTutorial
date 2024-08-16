import { useState } from 'react'

import './App.css'
import Card from './components/Card'
import { CountContext } from './context/countContext'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <CountContext.Provider value={[count,setCount]}>
        <Card/>
      </CountContext.Provider> */}
      <CountContext.Provider value={{count,setCount}}>
        <Card/>
      </CountContext.Provider>
    </>
  )
}

export default App
