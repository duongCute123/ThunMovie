import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import connect from "../@connect/connect"

const moduleName = "categoriesMovies"
const appName = "VueMovies"
export const genresmovie = {
    categoriesfilm: createAsyncThunk(`${appName}/${moduleName}/catergoriesmovies`, async (params, thunkAPI) => {
        try {
            const response = await connect.moviegenres.theloai(params)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    })
}
const genreSlice = createSlice({
    name: `${appName}/${moduleName}`,
    initialState: {
        loading: false,
        error: null,
        genres: []
    },
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(genresmovie.categoriesfilm.pending, (state) => {
                state.loading = true
                state.error = null;
                state.genres = {
                    data: []
                }
            })
            .addCase(genresmovie.categoriesfilm.fulfilled, (state, { payload }) => {
                state.loading = false
                state.error = null
                state.genres = payload
            })
            .addCase(genresmovie.categoriesfilm.rejected, (state, { error }) => {
                state.loading = false
                state.error = error
                state.genres = null
            })
    }
})
export default genreSlice.reducer