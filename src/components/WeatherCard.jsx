import { WEATHER_CODES } from "../utils/weatherCodes";
import { convertTemperature } from "../utils/temperature";

function WeatherCard({ weather, unit, selectedDay }) {
  if (selectedDay) {
    return (
      <div className="weather-card weather-card--selected-day">
        <div className="weather_details">
          <div className="location_container">
            <p className="city_p">{weather.city} |</p>
            <p className="country_p">{weather.country}</p>
          </div>
          <p className="selected_date_p">{new Date(selectedDay.date).toLocaleDateString("en-US", {weekday: "long"})}</p>
          <p className="max_temperature_p">
            {convertTemperature(selectedDay.maxTemperature, unit)}
          </p>
          <p className="min_temperature_p">
            {convertTemperature(selectedDay.minTemperature, unit)}
          </p>
          <p className="weather_p">
            {WEATHER_CODES[selectedDay.weatherCode] || "Unknown weather"}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="weather-card weather-card--selected-day">
        <div className="location_container">
          <p className="city_p">{weather.city}</p>
          <p className="country_p">{weather.country}</p>
        </div>
        <div className="weather_details">
          <p className="temperature_p">
            {convertTemperature(weather.current.temperature, unit)}
          </p>
          <p className="weather_p">
            {WEATHER_CODES[weather.current.weatherCode] || "Unknown weather"}
          </p>
        </div>
      </div>
    );
  }
}

export default WeatherCard;
