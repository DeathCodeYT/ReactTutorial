import { useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 2
    case "decrement":
      return state - 2
    case "reset":
      return 0

    default:
      throw Error("Unkown Action!")
  }
}


function App() {
  // const [count, setCount] = useState(0)
  const [count, dispatch] = useReducer(reducer, 0)

  function increment() {
    dispatch({ type: "increment" })
  }
  function decrement() {
    dispatch({ type: "decrement" })
  }
  function reset() {
    dispatch({ type: "reset" })
  }

  return (
    <>
      <div className="card">
        <button onClick={decrement}>
          -
        </button>
        <button onClick={reset}>
          count is {count}
        </button>
        <button onClick={increment}>
          +
        </button>
      </div>
    </>
  )
}

export default App
