import { createContext, useState } from "react";


export const TaskContext = createContext({
    allTasks: [],
    setAllTasks: () => { },
    deleteTask: () => { },
    addTask: () => { }
})


function TaskContextProvider({ children }) {
    const [allTasks, setAllTasks] = useState([])
    let deleteTask = (task) => {
        let newTasks = [...allTasks]
        newTasks.splice(newTasks.indexOf(task), 1)
        setAllTasks(newTasks)
    }
    function addTask(title, desc, isCompleted) {
        let newTask = {
            title,
            desc,
            isCompleted
        }
        setAllTasks((oldTasks) => [...oldTasks, newTask])
    }
    return (
        <TaskContext.Provider value={{
            allTasks,
            setAllTasks,
            deleteTask,
            addTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider
