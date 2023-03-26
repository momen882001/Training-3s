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
        increase: (state, action : counterAction) => {
            state.value += action.payload
        },
        decrease: (state, action : counterAction) => {
            state.value -= action.payload
        },
        update: (state) => {
            state.value = 0
        }
    }
})

export const { increase, decrease , update } = counterSlice.actions
export default counterSlice