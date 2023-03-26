import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export type book = {
    id: number,
    title: string,
    description: string,
    price: number
}

export type bookState = {
    books: book[] | null,
    isLoading: boolean,
    error: string | null
}

export const getBooks: any = createAsyncThunk("book/getBooks", async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await fetch("http://localhost:5000/books");
        const data = await response.json();
        return data;
    } catch (err: any) {
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

    // 3
    // try {
    //     const response = await axios.get("http://localhost:5000/books");
    //     const books = await response.data;
    //     return books;
    //   } catch (error) {
    //     return rejectWithValue("Error while fetching books");
    //   }
})

export const insertBooks : any = createAsyncThunk("book/insertBooks", async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        await axios.post("http://localhost:5000/books", data)
        return data
    } catch (err: any) {
        return rejectWithValue(err.message);
    }
})

const initialState: bookState = { books: null, isLoading: false, error: null };
const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {},
    extraReducers: {
        // getBooks 
        [getBooks.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getBooks.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books = action.payload;
        },
        [getBooks.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload as string;
        },
        // insertBooks
        [insertBooks.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [insertBooks.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books?.push(action.payload);
        },
        [insertBooks.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload as string;
        },
    },
})

export default bookSlice.reducer