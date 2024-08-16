import React, { useContext, useEffect } from 'react'
import Task from './Task'
import { TaskContext } from '../context/taskContext'
import axios from 'axios'

function Tasks() {
  const {taskList} = useContext(TaskContext)
  console.log("TASK List",taskList)
  return (
    <div className='flex flex-wrap items-center gap-2 overflow-auto p-4'>
    { taskList.length<1?<span>No Tasks Available Right Now. (You can Add Tasks)</span>:
      taskList.map((task)=>(
        <Task key={task.title} task={task}/>
      ))
    }
    </div>
  )
}

export default Tasks