import React from 'react'
import Task from './Task'

function Tasks({allTasks,onDelete}) {
  return (
    <div className='flex flex-wrap items-center gap-2 overflow-auto p-4'>
    { allTasks.length==0?<span>No Tasks Available Right Now. (You can Add Tasks)</span>:
      allTasks.map((task)=>(
        <Task key={task.title} onTaskDelete={onDelete} task={task}/>
      ))
    }
    </div>
  )
}

export default Tasks