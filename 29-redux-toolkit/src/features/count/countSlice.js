import { createSlice } from "@reduxjs/toolkit";

const initialState = {count:0}

export const countSlice = createSlice({
    name:"count",
    initialState,
    reducers:{
        incrementCount:(state,action)=>{
            state.count += action.payload
        },
        decrementCount:(state,action)=>{
            state.count -= action.payload
        },
        reset:(state,action)=>{
            state.count = 0
        },
    }
})

export const {incrementCount,decrementCount,reset} = countSlice.actions
export default countSlice.reducer
