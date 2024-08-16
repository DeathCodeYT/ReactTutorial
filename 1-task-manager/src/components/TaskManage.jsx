import React, { useState } from 'react'
import AddTask from './AddTask'
import Tasks from './Tasks'

// import Tail from './Tail'

function TaskManager() {  
  const  [allTasks,setAllTasks] = useState([])
  let onDelete = (task)=>{
    let newTasks = [...allTasks]
    newTasks.splice(newTasks.indexOf(task),1)
    setAllTasks(newTasks)
  }
  return (
    <div className='flex flex-col p-8 items-center'>
    <AddTask setAllTasks={setAllTasks}/>
    <div className='w-[100%] bg-slate-300 h-[2px] m-4'></div>
    <Tasks allTasks={allTasks} onDelete={onDelete} />
    {/* <Tail content="Tail">
      <h1 className='font-bold'>This is a Tail</h1>
      <p className='text-red-500'>Tails is like a footer</p>
    </Tail> */}
    </div>
  )
}

export default TaskManager