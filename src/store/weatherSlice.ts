import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { weatherAPI } from '../api/api'

// type WeatherStateType = {
//   "coord": {
//     "lon": 37.6156,
//     "lat": 55.7522
//   },
//   "weather": [
//     {
//       "id": 801,
//       "main": "Clouds",
//       "description": "few clouds",
//       "icon": "02d"
//     }
//   ],
//   "base": "stations",
//   "main": {
//     "temp": 31.31,
//     "feels_like": 31.48,
//     "temp_min": 31.24,
//     "temp_max": 31.32,
//     "pressure": 1005,
//     "humidity": 41,
//     "sea_level": 1005,
//     "grnd_level": 987
//   },
//   "visibility": 10000,
//   "wind": {
//     "speed": 6.44,
//     "deg": 218,
//     "gust": 13.3
//   },
//   "clouds": {
//     "all": 13
//   },
//   "dt": 1751983088,
//   "sys": {
//     "type": 2,
//     "id": 2000314,
//     "country": "RU",
//     "sunrise": 1751936199,
//     "sunset": 1751998329
//   },
//   "timezone": 10800,
//   "id": 524901,
//   "name": "Moscow",
//   "cod": 200
// }

type initialStateType = {
    data: any,
}

const initialState: initialStateType = {
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