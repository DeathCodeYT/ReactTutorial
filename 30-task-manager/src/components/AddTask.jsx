import React, { useRef } from 'react'
import { MdAddBox } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { addTask } from '../features/TaskSlice'

function AddTask() {
  // const [title, setTitle] = useState("")
  const titleRef = useRef(null)
  // const [desc, setDesc] = useState("")
  const descRef = useRef(null)
  const completeRef = useRef(false)

  const dispath = useDispatch()

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
      <input ref={titleRef} className='bg-slate-100 p-2' type="text" placeholder='Task name' />
      <input ref={descRef} className='bg-slate-100 p-2' type="text" placeholder='Task Description' />
      <div className='flex items-center select-none gap-2'>
        <input ref={completeRef} id="isComplete" type="checkbox" />
        <label htmlFor="isComplete">Completed</label>
      </div>
      <button onClick={() => dispath(addTask({ title: titleRef.current.value, desc: descRef.current.value, complete: completeRef.current.checked }))} className='bg-blue-600 px-6 py-2 text-white rounded-lg'>
        <MdAddBox />
      </button>
    </div>
  )
}

export default AddTask