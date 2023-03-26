import { createSlice } from '@reduxjs/toolkit'

const initialState: { isShown: boolean } = { isShown: false }
const showSlice = createSlice({
    name: "show",
    initialState,
    reducers: {
        showMe: (state) => {
            state.isShown = !state.isShown
        }
    }
})

export const { showMe } = showSlice.actions
export default showSlice