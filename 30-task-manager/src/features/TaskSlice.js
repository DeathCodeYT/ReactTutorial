import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    tasks: [
        { id: 0, title: "Task 1", desc: "This is task 1", complete: false }
    ],
    selectedTask: null
}

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({ ...action.payload, id: nanoid() })
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id != action.payload)
        },
        setSelectedTaskById: (state, action) => {
            let tasks = state.tasks.filter(task => task.id == action.payload)
            if (tasks.length < 1)
                state.selectedTask = null
            else
                state.selectedTask = tasks[0]
        },
        updateSelectedTask: (state, action) => {
            state.selectedTask = { ...state.selectedTask, ...action.payload }
        },
        updateTask: (state, action) => {
            state.tasks = state.tasks.map(task => {
                if (state.selectedTask) {
                    if (state.selectedTask.id == task.id)
                        return state.selectedTask
                    return task
                }
                else
                    return task
            })
        }
    }
})

export const { addTask, deleteTask, setSelectedTaskById, updateSelectedTask,updateTask } = taskSlice.actions
export default taskSlice.reducer