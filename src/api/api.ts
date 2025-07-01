import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    // withCredentials: true,
    // headers:{
        // 'API-KEY': 'd3de50686c876ef67661ed5a7ae801d0',
    // },
})

// units=metric — для Цельсия
// units=imperial — для Фаренгейта

// data/2.5/weather – текущая погода,
// data/2.5/forecast – прогноз,
// geo/1.0/direct – геокодирование (поиск координат по названию города).

export const weatherAPI = {
    getWeatherAPI () {
        return instance.get('weather?q=London,uk&units=metric&APPID=d3de50686c876ef67661ed5a7ae801d0')
        .then(response => response.data)
    }
}