import { WEATHER_CODES } from "../utils/weatherCodes"
import { convertTemperature } from "../utils/temperature";

function ForecastDayCard({ day, unit, onClick }) {
  
  return (
    <div className="forecast-card" onClick={onClick}>
      <p className="forecast-day">{new Date(day.date).toLocaleDateString("en-US", {weekday: "long"})}</p>
      <p className="forecast-temps">{convertTemperature(day.maxTemperature, unit)} / {convertTemperature(day.minTemperature, unit)}</p>
      <p className="forecast-condition">{WEATHER_CODES[day.weatherCode] || "Unknown weather"}</p>
    </div>
  )
}

export default ForecastDayCard