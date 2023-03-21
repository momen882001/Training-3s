import {createSlice , createStore} from '@reduxjs/toolkit'

export type reducerState = {
    value: number,
    name : string
}

export type reducerAction = {
    type: string,
    payload: number
}


const initialState: reducerState = { value: 0 , name : "Mo'men" }
// Redux Toolkit
const counterSlice  = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increase : (state,action) => {
            state.value += action.payload
        },
        decrease : (state,action) => {
            state.value -= action.payload
        }
    }
})

// Redux Basics
// const counterReducer = (state = initialState, action: reducerAction) => {
//     if (action.type === "increase") {
//         return {...state,value : state.value + action.payload}
//     }
//     if (action.type === "decrease") {
//         return {...state,value : state.value - action.payload}
//     }
//     return state
// }

const store = createStore(counterSlice.reducer)
export const {increase,decrease} = counterSlice.actions
export default store ;