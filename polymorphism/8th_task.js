import axios from 'axios'

// const apiUrl = 'http://localhost:8080/api/v2/'; // ???????????????

class WeatherService {
  constructor(city, request) {
    this.url = apiUrl + 'cities/' + city
    this.request = request
  }
  async getWeather() {
    const weatherRequest = await this.request.get(this.url)
    const weatherObj = JSON.parse(weatherRequest)
    return `Temperature in ${weatherObj.name}: ${weatherObj.temperature}C`
  }
}

class Request {
  constructor() {
  }
  async get(url) {
    const response = await axios(url)
    return response.data
  }
}

const city = process.argv[2]
const weather = new WeatherService(city, new Request())
console.log(await weather.getWeather())