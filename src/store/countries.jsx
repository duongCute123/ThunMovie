import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import connect from "../@connect/connect"

const moduleName = "quocGia"
const appName = "VueMovies"
export const countries = {
    getMoviesCountries: createAsyncThunk(`${moduleName}/${appName}/countries`, async (params, thunkAPI) => {
        try {
            const response = await connect.countries.quocgia(params)
            return response.data
        } catch (error) {
            return thunkAPI.fulfillWithValue(error)
        }
    })
}
const countriesSlice = createSlice({
    name: `${appName}/${moduleName}`,
    initialState: {
        loading: false,
        moviecountries: [],
        error: null
    },
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(countries.getMoviesCountries.pending, (state) => {
                state.error = null
                state.loading = true
                state.moviecountries = {
                    data: []
                }
            })
            .addCase(countries.getMoviesCountries.fulfilled, (state, { payload }) => {
                state.loading = false
                state.error = false
                state.moviecountries = payload
            })
            .addCase(countries.getMoviesCountries.rejected, (state, { error }) => {
                state.loading = false
                state.moviecountries = null
                state.error = error
            })
    }
})
export default countriesSlice.reducer