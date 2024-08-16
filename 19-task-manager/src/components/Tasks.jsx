import React, { useContext } from 'react'
import Task from './Task'
import { TaskContext } from '../context/taskContext'

function Tasks() {
  const {allTasks} = useContext(TaskContext)
  return (
    <div className='flex flex-wrap items-center gap-2 overflow-auto p-4'>
    { allTasks.length==0?<span>No Tasks Available Right Now. (You can Add Tasks)</span>:
      allTasks.map((task)=>(
        <Task key={task.title} task={task}/>
      ))
    }
    </div>
  )
}

export default Tasks