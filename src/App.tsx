import {  useState } from 'react'
import WeatherCard from './components/WeatherCard/WeatherCard'
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  const [city, setCity] = useState('Madrid')

  return (
    <div>
      <SearchBar setCity={setCity} />
      <WeatherCard city={city} />
    </div>
  )
}

export default App
