import { convertTemperature } from "../utils/temperature";

function TodayDetails({ current, unit }) {
  return (
    <div>
        <p>Feels like: {convertTemperature(current.feelsLike, unit)}</p>
        <p>Humidity: {current.humidity}</p>
        <p>Wind speed: {current.windSpeed}</p>
    </div>
  )
}

export default TodayDetails