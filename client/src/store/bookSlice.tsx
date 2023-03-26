import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBooks: any = createAsyncThunk("book/getBooks", async (args, thunkAPI) => {
    try {
        const response = await fetch("http://localhost:5000/books");
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }

    // axios 
    // axios.get("http://localhost:5000/books"
    // ).then((response) => {
    //     console.log(response);
    //     const data = response.data;
    //     return data;
    // }).catch((err) => {
    //     console.log(err);
    // })
})

export type booksList = {
    id: number,
    title: string,
    description: string,
    price: number
}

const initialState: { books: booksList[] | null , isLoading : boolean } = { books: null , isLoading : false };

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {},
    extraReducers: {
        [getBooks.pending]: (state, action: any) => {
            state.isLoading = true;
            console.log(action);
        },
        [getBooks.fulfilled]: (state, action: any) => {
            state.isLoading = false;
            state.books = action.payload;
            console.log(action);
        },
        [getBooks.rejected]: (state, action: any) => {
            state.isLoading = false;
            console.log(action);
        }
    },
})

export default bookSlice