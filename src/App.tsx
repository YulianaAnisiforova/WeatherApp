import React, { useEffect, useState } from 'react'
import WeatherCard from './components/WeatherCard'
import SearchBar from './components/SearchBar'
import { useDispatch } from 'react-redux'
import { AppDispatch } from './store/store'

function App() {
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
      // dispatch(getWeatherThunk())
    }, [searchValue])

  return (
    <div>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <WeatherCard/>
    </div>
  )
}

export default App
