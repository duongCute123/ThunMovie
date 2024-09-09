import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import connect from "../@connect/connect"

const moduleName = "Bo"
const AppName = "ThunMovie"
export const moviebo = {
    getAnime: createAsyncThunk(`${AppName}/${moduleName}/category`, async (param, thunkAPI) => {
        try {
            const responsive = await connect.updatefilm.filmnotpagelimit(param)
            return responsive.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    })
}
const BoSlice = createSlice({
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
            .addCase(moviebo.getAnime.pending, (state) => {
                state.loading = true
                state.error = null
                state.movies = {
                    data: []
                }
            })
            .addCase(moviebo.getAnime.fulfilled, (state, { payload }) => {
                state.loading = false
                state.error = false
                state.movies = payload
            })
            .addCase(moviebo.getAnime.rejected, (state, { error }) => {
                state.loading = false
                state.movies = {
                    data: []
                }
                state.error = error
            })
    }


})
export default BoSlice.reducer