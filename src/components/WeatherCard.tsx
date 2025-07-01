import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import { getWeatherThunk } from '../store/weatherSlice'
import emojiFlags from 'emoji-flags'
import { getName } from 'country-list'

import styles from './WeatherCard.module.css'

const WeatherCard: FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const weather = useSelector((state: RootState) => state.weather.data)

  useEffect(() => {
    dispatch(getWeatherThunk())
  }, [])

  if (!weather || !weather.main) {
    return <div>Loading weather...</div>
  }

  const countryCode = weather.sys?.country
  const flag = countryCode ? emojiFlags.countryCode(countryCode)?.emoji : ''
  
  const countryName = countryCode ? getName(countryCode) : ''

//   return (
//     <div className={styles.card}>
//       <h2 className={styles.header}>{weather.name},</h2>
//       <h2 className={styles.header}>{countryName} {flag}</h2>
//       <p className={styles.temp}>Temperature: {weather.main.temp}°C</p>
//       <p>Feels like: {weather.main.feels_like}°C</p>
//       <p className={styles.cond}>Condition: {weather.weather[0].description}</p>
//       <p>Humidity: {weather.main.humidity}%</p>
//       <p>Wind: {weather.wind.speed} m/s</p>
//     </div>
//   )

return (
  <div className={styles.card}>
    <div className={styles.cardHeader}>
      <h2 className={styles.title}>
        {weather.name},
      </h2>
      <h2 className={styles.title}>
        {countryName} {flag}
      </h2>
      <div className={styles.mainTemp}>{Math.round(weather.main.temp)}°C</div>
    </div>
    
    <div className={styles.weatherGrid}>
      <div className={styles.weatherItem}>
        <span className={styles.label}>Feels like</span>
        <span className={styles.value}>{Math.round(weather.main.feels_like)}°C</span>
      </div>
      <div className={styles.weatherItem}>
        <span className={styles.label}>Condition</span>
        <span className={styles.value}>{weather.weather[0].description}</span>
      </div>
      <div className={styles.weatherItem}>
        <span className={styles.label}>Humidity</span>
        <span className={styles.value}>{weather.main.humidity}%</span>
      </div>
      <div className={styles.weatherItem}>
        <span className={styles.label}>Wind</span>
        <span className={styles.value}>{weather.wind.speed} m/s</span>
      </div>
    </div>
  </div>
)
}

export default WeatherCard
