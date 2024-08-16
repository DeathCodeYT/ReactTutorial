import React, { useContext, useRef, useState } from 'react'
import { MdAddBox, MdRestore } from 'react-icons/md'
import { TaskContext } from '../context/taskContext'
import axios from 'axios'

function AddTask() {
  // const [title, setTitle] = useState("")
  const id = useRef(null)
  // const [desc, setDesc] = useState("")
  const todo = useRef(null)
  const complete = useRef(false)

  const { dispath } = useContext(TaskContext)
  async function fetchData() {
    try {
        const res = await axios.get('https://dummyjson.com/todos')
        dispath({type:'init',taskList:res.data.todos})
    } catch (error) {
        console.log("Fetching Todos Error")
        dispath({type:'reset'})
    }
}
  // let onTitleChange = (e) => {
  //   // console.log(e.target.value)
  //   setTitle(e.target.value)
  // }
  // let onDescChange = (e) => {
  //   // console.log(e.target.value)
  //   setDesc(e.target.value)
  // }
  // let onCompleteChange = (e) => {
  //   // console.log(e.target.checked)
  //   setIsCompleted(e.target.checked)
  // }


  return (
    <div className='flex items-center gap-2 p-2'>
      <input ref={id} className='bg-slate-100 p-2' type="text" placeholder='Task name' />
      <input ref={todo} className='bg-slate-100 p-2' type="text" placeholder='Task Description' />
      <div className='flex items-center select-none gap-2'>
        <input ref={complete} id="isComplete" type="checkbox" />
        <label htmlFor="isComplete">Completed</label>
      </div>
      <button onClick={() => dispath({
        type: "addTask",
        newTask: { id: id.current.value, todo: todo.current.value, complete: complete.current.checked }
      })} className='bg-blue-600 px-6 py-2 text-white rounded-lg'>
        <MdAddBox />
      </button>
      <button onClick={() => dispath({
        type: "reset",
      })} className='bg-blue-600 px-6 py-2 text-white rounded-lg'>
        <MdRestore />
      </button>
      <button onClick={fetchData} className='bg-blue-600 px-6 py-2 text-white rounded-lg'>
        Get Tasks from api
      </button>
    </div>
  )
}

export default AddTask