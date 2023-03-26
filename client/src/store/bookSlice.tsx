import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBooks: any = createAsyncThunk("book/getBooks", async (args, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;
    try {
        const response = await fetch("http://localhost:5000/books");
        const data = await response.json();
        return data;
    } catch (err : any) {
        return rejectWithValue(err.message);
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

export type book = {
    id: number,
    title: string,
    description: string,
    price: number
}

const initialState: { books: book[] | null , isLoading : boolean , error : string | null } = { books: null , isLoading : false , error: null } ;

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {},
    extraReducers: {
        [getBooks.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
            console.log(action);
        },
        [getBooks.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books = action.payload;
            console.log(action);
        },
        [getBooks.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            console.log(action);
        }
    },
})

export default bookSlice