import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/counterSlice'
import showReducer from '../store/showSlice'


const store = configureStore({
    reducer: {
        counter: counterReducer,
        show: showReducer
    }
})
export default store;




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