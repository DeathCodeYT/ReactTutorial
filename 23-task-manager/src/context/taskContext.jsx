import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "addTask":
            console.log(action)
            return [action.newTask, ...state]
        case "deleteTask":
            let newTasks = [...state]
            newTasks.splice(newTasks.indexOf(action.task), 1)
            return newTasks
        case "reset":
            return []
        case "init":
            return action.taskList
        default:
            console.log("Invalid Type")
            return []
    }
}

export const TaskContext = createContext({
    taskList: [],
    dispath: () => { },
})


function TaskContextProvider({ children }) {
    const [taskList, dispath] = useReducer(reducer, [])
    useEffect(()=>{
        async function fetchData() {
            try {
                const res = await axios.get('https://dummyjson.com/todos')
                dispath({type:'init',taskList:res.data.todos})
            } catch (error) {
                console.log("Fetching Todos Error")
                dispath({type:'reset'})
            }
        }
        fetchData()
    },[])
    return (
        <TaskContext.Provider value={{
            taskList,
            dispath
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider
