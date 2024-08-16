import React, { useCallback, useContext } from 'react'
import { FaRegEdit } from 'react-icons/fa';
import { IoCheckmarkDone } from 'react-icons/io5';
import { MdPendingActions } from 'react-icons/md';
import { RiDeleteBin6Line } from "react-icons/ri";
import { TaskContext } from '../context/taskContext';

function Task({task}) {
  const {deleteTask} = useContext(TaskContext)
  return (
    <div className='flex flex-col border bg-white m-2 shadow-lg w-[20rem] gap-3 rounded-lg z-10 '>
      <div className='flex items-center justify-between h-[2rem] bg-slate-900 rounded-t-lg p-2 text-white'>
        <span className='font-bold'>{task.title}</span>
        <span className={`${task.isCompleted ? "text-blue-400" : "text-green-500"}`}>
          {task.isCompleted ? <IoCheckmarkDone /> : <MdPendingActions />}
        </span>
      </div>
      <span className='m-2'>{task.desc}</span>
      <div className='flex items-center justify-between m-2'>
        <button className='bg-green-600 hover:bg-green-700 px-6 py-2 text-white rounded-lg'>
        <FaRegEdit />
        </button>
        <button onClick={() => { deleteTask(task) }} className='bg-red-600 hover:bg-red-700 px-6 py-2 text-white rounded-lg'>
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  )
}

export default Task