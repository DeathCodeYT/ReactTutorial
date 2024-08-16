import React, { useContext, useEffect, useRef } from 'react'
import { TaskContext } from '../../context/taskContext'
import { useNavigate } from 'react-router-dom'

function EditTask() {
  const {selectedTask} = useContext(TaskContext)

  const navigate = useNavigate()
  useEffect(()=>{
    document.title = "Edit Task"
    if(!selectedTask.id){
      navigate('/')
    }
  },[])
  return (
    <div className='w-full h-[90vh] flex items-center justify-center'>
      <div className="flex flex-col gap-3 border w-[40rem] border-black p-2 rounded-xl">
        <input className='p-2 border bg-gray-200 text-black rounded-md' type='text' value={selectedTask.id}></input>
        <input className='p-2 border bg-gray-200 text-black rounded-md' type='text' value={selectedTask.todo}></input>
        <input className='p-2 border bg-gray-200 text-black rounded-md' type='checkbox' checked={selectedTask.complete}></input>
        <button className='bg-blue-700 px-3 py-1 rounded-md'>Save</button>
      </div>
    </div>
  )
}

export default EditTask