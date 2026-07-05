import { WEATHER_CODES } from "../utils/weatherCodes"


function ForecastDayCard({ day }) {
  return (
    <div>
      <p>{day.date}</p>
      <p>{day.maxTemperature}</p>
      <p>{WEATHER_CODES[day.weatherCode] || "Unknown weather"}</p>
    </div>
  )
}

export default ForecastDayCard