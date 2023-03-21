import { createSlice } from '@reduxjs/toolkit'

export type counterInitState = {
    value: number,
    name: string
}

export type counterState = {
    counter: {
        value: number,
        name: string
    }
}

export type counterAction = {
    type: string,
    payload: number
}


const initialState: counterInitState = { value: 0, name: "Mo'men" }
// Redux Toolkit
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increase: (state, action) => {
            state.value += action.payload
        },
        decrease: (state, action) => {
            state.value -= action.payload
        }
    }
})

export const { increase, decrease } = counterSlice.actions
export default counterSlice.reducer