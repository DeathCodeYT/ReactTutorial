import React,{useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { setSelectedTaskById, updateSelectedTask, updateTask } from '../../features/TaskSlice'

function EditTask() {
  const {id} = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const selectedTask = useSelector(state=>state.selectedTask)
  useEffect(()=>{
    dispatch(setSelectedTaskById(id))
  },[])
  return (
    <div className='w-full h-[90vh] flex items-center justify-center'>
      {!selectedTask?"No Selected Task":<div className="flex flex-col gap-3 border w-[40rem] border-black p-2 rounded-xl">
        <input onChange={(e)=>dispatch(updateSelectedTask({title:e.target.value}))} className='p-2 border bg-gray-200 text-black rounded-md' type='text' value={selectedTask.title}></input>
        <input onChange={(e)=>dispatch(updateSelectedTask({desc:e.target.value}))} className='p-2 border bg-gray-200 text-black rounded-md' type='text' value={selectedTask.desc}></input>
        <input onChange={(e)=>dispatch(updateSelectedTask({complete:e.target.checked}))} className='p-2 border bg-gray-200 text-black rounded-md' type='checkbox' checked={selectedTask.complete}></input>
        <button onClick={()=>{dispatch(updateTask());navigate('/')}} className='w-full py-2 bg-blue-500 hover:bg-blue-600'>Save</button>
      </div>}
    </div>
  )
}

export default EditTask