import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import connect from "../@connect/connect"

const moduleName = "Anime"
const AppName = "ThunMovie"
export const anime = {
    getAnime: createAsyncThunk(`${AppName}/${moduleName}/category`, async (param, thunkAPI) => {
        try {
            const responsive = await connect.updatefilm.filmnewupdate(param)
            return responsive.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    })
}
const AnimeSlice = createSlice({
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
            .addCase(anime.getAnime.pending, (state) => {
                state.loading = true
                state.error = null
                state.movies = {
                    data: []
                }
            })
            .addCase(anime.getAnime.fulfilled, (state, { payload }) => {
                state.loading = false
                state.error = false
                state.movies = payload
            })
            .addCase(anime.getAnime.rejected, (state, { error }) => {
                state.loading = false
                state.movies = {
                    data: []
                }
                state.error = error
            })
    }


})
export default AnimeSlice.reducer