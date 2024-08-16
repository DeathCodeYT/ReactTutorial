import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [taskList,setTaskList] = useState([])
  async function fetchData(){
    try {
      const res = await axios.get('https://dummyjson.com/todos')
      setTaskList(res.data.todos)
    } catch (error) {
      console.log("Fetching error: ",error)
    }
  }
  fetchData()
  return (
    <>
     <div className='flex flex-col gap-2'>
      {taskList.length<1?"No Tasks":taskList.map(task=>(
        <span className='text-2xl'>{task.todo}</span>
      ))}
     </div>
    </>
  )
}

export default App
