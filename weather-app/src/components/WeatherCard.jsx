import { WEATHER_CODES } from "../utils/weatherCodes";

function WeatherCard({weather}) {
  return (
    <div className="weather-card">
      {weather && (
        <>
          <p>{weather.city}</p>
          <p>{weather.country}</p>
          <p>{weather.temperature}°C</p>
          <p>{WEATHER_CODES[weather.weatherCode] || "Unknown weather"}</p>
        </>
      )}
    </div>
  );
}

export default WeatherCard;
