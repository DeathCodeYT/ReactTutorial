import React, { useContext, useEffect } from 'react'
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
    <div>{selectedTask.todo}</div>
  )
}

export default EditTask