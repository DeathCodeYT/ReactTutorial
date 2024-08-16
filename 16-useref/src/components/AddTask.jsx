import React, { useRef, useState } from 'react'
import { MdAddBox } from 'react-icons/md'

function AddTask({ setAllTasks }) {
  // const [title, setTitle] = useState("")
  const title = useRef(null)
  const [desc, setDesc] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)
  // let onTitleChange = (e) => {
  //   // console.log(e.target.value)
  //   setTitle(e.target.value)
  // }
  let onDescChange = (e) => {
    // console.log(e.target.value)
    setDesc(e.target.value)
  }
  let onCompleteChange = (e) => {
    // console.log(e.target.checked)
    setIsCompleted(e.target.checked)
  }

  function addTask() {
    console.log(title.current.value)
    // let newTask = {
    //   title: title,
    //   desc: desc,
    //   isCompleted: isCompleted
    // }
    // setAllTasks((oldTasks) => [...oldTasks, newTask])
  }


  return (
    <div className='flex items-center gap-2 p-2'>
      <input ref={title} className='bg-slate-100 p-2' type="text" placeholder='Task name' />
      <input onChange={onDescChange} className='bg-slate-100 p-2' type="text" placeholder='Task Description' />
      <div className='flex items-center select-none gap-2'>
        <input onChange={onCompleteChange} id="isComplete" type="checkbox" />
        <label htmlFor="isComplete">Completed</label>
      </div>
      <button onClick={addTask} className='bg-blue-600 px-6 py-2 text-white rounded-lg'>
        <MdAddBox />
      </button>
    </div>
  )
}

export default AddTask