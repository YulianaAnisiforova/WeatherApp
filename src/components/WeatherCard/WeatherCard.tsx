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

  const weatherItems = [
    {
        label: 'Feels like',
        value: `${Math.round(weather.main.feels_like)}°C`,
        key: 'feelsLike'
    },
    {
        label: 'Condition',
        value: weather.weather[0].description,
        key: 'condition'
    },
    {
        label: 'Humidity',
        value: `${weather.main.humidity}%`,
        key: 'humidity'
    },
    {
        label: 'Wind',
        value: `${weather.wind.speed} m/s`,
        key: 'wind'
    }
  ]
  
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
            {weatherItems.map((item) => (
                <div className={styles.weatherItem} key={item.key}>
                    <span className={styles.label}>{item.label}</span>
                    <span className={styles.value}>{item.value}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default WeatherCard
