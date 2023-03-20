import { createStore } from 'redux'

type reducerState = {
    value: number
}

type reducerAction = {
    type: string,
    payload: number
}

const initState: reducerState = { value: 0 }
const counterReducer = (state = initState, action: reducerAction) => {
    if (action.type === "increase") {
        return {value : state.value + action.payload}
    }
    if (action.type === "decrease") {
        return {value : state.value - action.payload}
    }
    return state
}

const store = createStore(counterReducer)
export default store ;