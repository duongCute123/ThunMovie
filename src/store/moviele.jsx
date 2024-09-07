import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import connect from "../@connect/connect"

const moduleName = "Le"
const AppName = "ThunMovie"
export const moviele = {
    getAnime: createAsyncThunk(`${AppName}/${moduleName}/category`, async (param, thunkAPI) => {
        try {
            const responsive = await connect.updatefilm.filmnotpagelimit(param)
            return responsive.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    })
}
const LeSlice = createSlice({
    name: `${AppName}/${moduleName}`,
    initialState: {
        loading: null,
        error: null,
        movies: []
    },
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(moviele.getAnime.pending, (state) => {
                state.loading = true
                state.error = null
                state.movies = {
                    data: []
                }
            })
            .addCase(moviele.getAnime.fulfilled, (state, { payload }) => {
                state.loading = false
                state.error = false
                state.movies = payload
            })
            .addCase(moviele.getAnime.rejected, (state, { error }) => {
                state.loading = false
                state.movies = {
                    data: []
                }
                state.error = error
            })
    }


})
export default LeSlice.reducer