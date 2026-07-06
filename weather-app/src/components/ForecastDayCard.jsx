import { WEATHER_CODES } from "../utils/weatherCodes"


function ForecastDayCard({ day }) {
  
  return (
    <div>
      <p>{new Date(day.date).toLocaleDateString("en-US", {weekday: "long"})}</p>
      <p>{day.maxTemperature}°C / {day.minTemperature}°C </p>
      <p>{WEATHER_CODES[day.weatherCode] || "Unknown weather"}</p>
    </div>
  )
}

export default ForecastDayCard