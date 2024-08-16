import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'



function App() {
  const [taskList, setTaskList] = useState([])
  const [text,setText] =useState("")
  const [loading,setLoading] = useState(false)
  async function fetchData() {
    try {
      setLoading(true)
      const res = await axios.get('https://dummyjson.com/todos')
      setTaskList(res.data.todos)
      console.log(res.data.todos)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      // console.log("Fetching error: ",error)
    }
  }
  useEffect(() => {
    document.title = "React Course"
    const t = setInterval(()=>{
      console.log("sldfkjsld")
    },500)
    return clearInterval(t)
  }, [])
  useEffect(() => {
    fetchData()
  }, [text])
  return (
    <>
      <div className='flex items-center justify-center'>
        <input onChange={(e)=>setText(e.target.value)} className='p-1 h-10 border m-4' placeholder='Search' type="text" />
      </div>
      <div className='flex flex-col gap-2'>
        {loading?"Loading...":taskList.length<1?"No tasks":taskList.map((task, i) => (
          <div key={i} className='flex items-center gap-8'>
            <span className='text-2xl text-gray-600'>{i + 1}</span>
            <span key={task.id} className='text-2xl'>{task.todo}</span>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
