import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import connect from "../@connect/connect"

const AppName = "ThunMov"
const ModuleName = "SearchMovie"
export const search = {
    timkiem: createAsyncThunk(`${AppName}/${ModuleName}/timkiem`, async (params, thunkAPI) => {
        try {
            const responsive = await connect.searchmovie.seekingmovie(params)
            return responsive.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    })
}
const SearchSlice = createSlice({
    name: `${AppName}/${ModuleName}`,
    initialState: {
        loading: null,
        movie: [],
        error: null
    },
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(search.timkiem.pending, (state) => {
                state.loading = true
                state.movie = {
                    data: []
                }
                state.error = false
            })
            .addCase(search.timkiem.fulfilled, (state, { payload }) => {
                state.loading = false
                state.movie = payload
                state.error = false
            })
            .addCase(search.timkiem.rejected, (state, { error }) => {
                state.loading = null
                state.movie = null
                state.error = error
            })
    }

})
export default SearchSlice.reducer