import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import connect from "../@connect/connect"

const moduleName = "MovieNewUpDate"
const AppName = "ThunMovie"
export const movie = {
    getmoviehomepage: createAsyncThunk(`${moduleName}/${AppName}/newupdate`, async (param, thunkAPI) => {
        try {
            const responsive = await connect.film.getlistfilm(param)
            
            return responsive.data
        } catch (error) {
            thunkAPI.dispatch({ variant: "error", message: "Lỗi lấy dữ liệu" })
            return thunkAPI.rejectWithValue(error)
        }
    })
}
const MovieSlice = createSlice({
    name: `${AppName}/${moduleName}`,
    initialState: {
        loading: true,
        error: null,
        movies: []
    },
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(movie.getmoviehomepage.pending, (state) => {
                state.loading = true
                state.error = false
                state.movies = {
                    data: []
                }
            })
            .addCase(movie.getmoviehomepage.fulfilled, (state, { payload }) => {
                state.loading = false
                state.error = false
                state.movies = payload
            })
            .addCase(movie.getmoviehomepage.rejected, (state, { error }) => {
                state.loading = false
                state.movies = {
                    data: []
                }
                state.error = error
            })
    }


})
export default MovieSlice.reducer