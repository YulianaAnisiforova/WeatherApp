import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { getWeatherThunk } from '../../store/weatherSlice'
import emojiFlags from 'emoji-flags'
import { getName } from 'country-list'

import styles from './WeatherCard.module.css'

type WeatherCardPropsType = {
    city: string,
}

const WeatherCard: FC<WeatherCardPropsType> = ({city}) => {
  const dispatch = useDispatch<AppDispatch>()
  const weather = useSelector((state: RootState) => state.weather.data)

  useEffect(() => {
    dispatch(getWeatherThunk(city))
  }, [city])

  if (!weather || !weather.main) {
    return <div>Loading weather...</div>
  }

  const countryCode = weather.sys?.country
  const flag = countryCode ? emojiFlags.countryCode(countryCode)?.emoji : ''
  
  const countryName = countryCode ? getName(countryCode) : ''
  
  return (
    <div className={styles.card}>
        <div className={styles.header}>
            <div>
                <h2 className={styles.title}>{weather.name},</h2>
                <h2 className={styles.title}>{countryName} {flag}</h2>
            </div>

            <div>
                <div className={styles.mainInfo}>{Math.round(weather.main.temp)}°C</div>
                <div className={styles.mainInfo}>{weather.weather[0].main}</div>
            </div>
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
