import React from 'react'
import Task from './Task'
import {useSelector} from 'react-redux'

function Tasks() {
 const taskList = useSelector(state=>state.tasks)
  // console.log("TASK List",taskList)
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