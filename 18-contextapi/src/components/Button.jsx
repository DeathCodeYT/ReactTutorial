import React, { useContext } from 'react'
import { CountContext } from '../context/countContext'

function Button() {
    const {count,setCount} = useContext(CountContext)
    return (
        <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>
    )
}

export default Button