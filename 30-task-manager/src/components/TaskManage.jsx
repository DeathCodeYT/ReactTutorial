import React from 'react'
import AddTask from './AddTask'
import Tasks from './Tasks'

// import Tail from './Tail'

function TaskManager() {  
 
  return (
    <div className='flex flex-col p-8 items-center'>
    <AddTask />
    <div className='w-[100%] bg-slate-300 h-[2px] m-4'></div>
    <Tasks  />
    {/* <Tail content="Tail">
      <h1 className='font-bold'>This is a Tail</h1>
      <p className='text-red-500'>Tails is like a footer</p>
    </Tail> */}
    </div>
  )
}

export default TaskManager