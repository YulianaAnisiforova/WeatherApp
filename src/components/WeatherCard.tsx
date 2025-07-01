import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import { getWeatherThunk } from '../store/weatherSlice'

const WeatherCard: FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const weather = useSelector((state: RootState) => state.weather.data)

  useEffect(() => {
    dispatch(getWeatherThunk())
  }, [])

  if (!weather || !weather.main) {
    return <div>Loading weather...</div>
  }

  return (
    <div>
      <h2>Weather in {weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Feels like: {weather.main.feels_like}°C</p>
      <p>Condition: {weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  )
}

export default WeatherCard
