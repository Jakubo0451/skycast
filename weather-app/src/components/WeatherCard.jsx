import { WEATHER_CODES } from "../utils/weatherCodes";

function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <div className="location_container">
        <p className="city_p">{weather.city} |</p>
        <p className="country_p">{weather.country}</p>
      </div>
      <div className="weather_details">
        <p className="temperature_p">{weather.current.temperature}°C |</p>
        <p className="weather_p">
          {WEATHER_CODES[weather.current.weatherCode] || "Unknown weather"}
        </p>
      </div>
    </div>
  );
}

export default WeatherCard;
