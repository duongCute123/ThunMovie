import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import connect from "../@connect/connect"

const moduleName = "Anime"
const AppName = "ThunMovie"
export const anime = {
    getAnime: createAsyncThunk(`${AppName}/${moduleName}/category`, async (param, thunkAPI) => {
        try {
            const responsive = await connect.updatefilm.filmnotpagelimit(param)
            return responsive.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }),
    getMoviePageLimit: createAsyncThunk(`${AppName}/${moduleName}/pagelimit`, async (param, thunkAPI) => {
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
        loading: false,
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
                state.error = null
                state.movies = payload
            })
            .addCase(anime.getAnime.rejected, (state, { error }) => {
                state.loading = false
                state.movies = {
                    data: []
                }
                state.error = error
            })
            .addCase(anime.getMoviePageLimit.pending, (state) => {
                state.loading = true
                state.error = null
                state.movies = {
                    data: []
                }
            })
            .addCase(anime.getMoviePageLimit.fulfilled, (state, { payload }) => {
                state.loading = false
                state.error = null
                state.movies = payload
            })
            .addCase(anime.getMoviePageLimit.rejected, (state, { error }) => {
                state.loading = false
                state.movies = {
                    data: []
                }
                state.error = error
            })
    }


})
export default AnimeSlice.reducer