import { WEATHER_URL, WEATHER_API } from "./constants";

export class WeatherService {
  async fetchFiveDayForecast() {
    return new Promise( async (success, failure) => {
      try {
        const response = await fetch(`${WEATHER_URL}${WEATHER_API}`)
        if (response.ok) {
          const json = await response.json()
          const data = json.list
          .filter(day => day.dt_txt.includes( '00:00:00'))
          .map((item, index) => ({
            temp: item.main.temp,
            dt: item.dt,
            date: item.dt_txt,
            imgID: item.weather[0].id,
            description: item.weather[0].description,
            feels: item.main.feels_like,
            humidity: item.main.humidity,
          })) 
          success({ response, data })
        } else {
          failure( {error: 'Invalid Request'})
        }
      } catch(error) {
        failure(error)
      }
    })
  }
}