import { WEATHER_CODES } from "../utils/weatherCodes"
import { convertTemperature } from "../utils/temperature";

function ForecastDayCard({ day, unit }) {
  
  return (
    <div>
      <p>{new Date(day.date).toLocaleDateString("en-US", {weekday: "long"})}</p>
      <p>{convertTemperature(day.maxTemperature, unit)} / {convertTemperature(day.minTemperature, unit)}</p>
      <p>{WEATHER_CODES[day.weatherCode] || "Unknown weather"}</p>
    </div>
  )
}

export default ForecastDayCard