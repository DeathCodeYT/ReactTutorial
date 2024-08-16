import React, { useContext,useState, useEffect } from 'react'
import Task from './Task'
import {useLoaderData} from 'react-router-dom'

import axios from 'axios'
import { TaskContext } from '../../context/taskContext'

function Tasks() {
  const taskList = useLoaderData()
  // const {taskList} = useContext(TaskContext)
  // console.log("TASK List",taskList)
  // const [taskList,setTaskList] = useState([])
  // useEffect(()=>{
  //   async function fetchData() {
  //     try {
  //         const res = await axios.get('https://dummyjson.com/todos')
  //         setTaskList(res.data.todos)
  //     } catch (error) {
  //         // console.log("Fetching Todos Error")
  //         setTaskList([])
  //     }
  // }
  // fetchData()
  // },[])
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
export async function fetchTodos() {
      try {
          const res = await axios.get('https://dummyjson.com/todos')
          return res.data.todos
      } catch (error) {
          // console.log("Fetching Todos Error")
          return []
      }
  }
export default Tasks