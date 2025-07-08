import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { weatherAPI } from '../api/api'

interface WeatherState {
    data: any,
}

const initialState: WeatherState = {
    data: null,
}

export const getWeatherThunk = createAsyncThunk(
    'weather/getWeatherStatus',
    async (city: string) => {
      const data = await weatherAPI.getWeatherAPI(city)
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
        state.data = []
      })
      .addCase(getWeatherThunk.fulfilled, (state, action) => {
        state.data = action.payload
      })
      .addCase(getWeatherThunk.rejected, (state) => {
        state.data = []
      })
  }
})

export const {setWeather} = weatherSlice.actions
export default weatherSlice.reducer