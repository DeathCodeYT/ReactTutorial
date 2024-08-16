import React, { useContext, useRef, useState } from 'react'
import { MdAddBox } from 'react-icons/md'
import { TaskContext } from '../context/taskContext'

function AddTask() {
  // const [title, setTitle] = useState("")
  const title = useRef(null)
  // const [desc, setDesc] = useState("")
  const desc = useRef(null)
  const isCompleted = useRef(false)

  const { addTask } = useContext(TaskContext)
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
      <input ref={title} className='bg-slate-100 p-2' type="text" placeholder='Task name' />
      <input ref={desc} className='bg-slate-100 p-2' type="text" placeholder='Task Description' />
      <div className='flex items-center select-none gap-2'>
        <input ref={isCompleted} id="isComplete" type="checkbox" />
        <label htmlFor="isComplete">Completed</label>
      </div>
      <button onClick={() => addTask(title.current.value, desc.current.value, isCompleted.current.checked)} className='bg-blue-600 px-6 py-2 text-white rounded-lg'>
        <MdAddBox />
      </button>
    </div>
  )
}

export default AddTask