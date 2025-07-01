import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { weatherAPI } from '../api/api'

interface WeatherState {
    data: any,
    // status: 'loading' | 'success' | 'error',
}

const initialState: WeatherState = {
    data: null,
    // status: 'loading',
}

export const getWeatherThunk = createAsyncThunk(
    'weather/getWeatherStatus',
    async () => {
      const data = await weatherAPI.getWeatherAPI()
      return data
    },
)

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeather(state, action) {
      state.data = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherThunk.pending, (state) => {
        // state.status = 'loading'
        state.data = []
      })
      .addCase(getWeatherThunk.fulfilled, (state, action) => {
        // state.status = 'success'
        state.data = action.payload
      })
      .addCase(getWeatherThunk.rejected, (state) => {
        // state.status = 'error'
        state.data = []
      })
  }
})

export const {setWeather} = weatherSlice.actions
export default weatherSlice.reducer