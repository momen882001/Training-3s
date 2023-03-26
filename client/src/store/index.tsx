import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../store/counterSlice'
import showSlice from '../store/showSlice'
import book from './bookSlice'


const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        show: showSlice.reducer,
        book,
    }
})
export default store;

