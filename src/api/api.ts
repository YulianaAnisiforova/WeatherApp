import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
})

export const weatherAPI = {
    getWeatherAPI (city: string) {
        return instance.get(`weather?q=${city}&units=metric&APPID=d3de50686c876ef67661ed5a7ae801d0`)
        .then(response => response.data)
    }
}