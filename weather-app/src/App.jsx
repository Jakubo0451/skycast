import { useState } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!city.trim()) return setError("Type something to search!");
    setError("");

    setWeather(null);
    setLoading(true);

    try {
      const geocodeUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city.trim())}&count=1&language=en`;
      console.log(geocodeUrl);
      const geoResponse = await fetch(geocodeUrl);

      if (!geoResponse.ok) {
        throw new Error("Network response was not ok");
      }
      const geoData = await geoResponse.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found");
      }

      const { latitude, longitude, name, country } = geoData.results[0];
      console.log(`Found: ${name}, ${country}, (${latitude}, ${longitude})`);
      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`;
      const weatherResponse = await fetch(weatherUrl);

      if (!weatherResponse.ok) {
        throw new Error("Weather service error");
      }

      const weatherData = await weatherResponse.json();

      const weatherInfo = {
        city: name,
        country: country,
        temperature: weatherData.current.temperature_2m,
        latitude: latitude,
        longitude: longitude,
        weatherCode: weatherData.current.weather_code,
      };
      console.log("Weather data: ", weatherInfo);
      setWeather(weatherInfo);
    } catch (error) {
      console.error("Error caught in block: ", error);
      setError(error.message || "Something went wrong");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div>
        <h1>Weather Dashboard</h1>
        <form className="top_section" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search a city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <button type="submit">Search</button>
        </form>
        {!weather && !loading && !error && (
          <>
            <p>Type in a city to search for the weather</p>
          </>
        )}
        <div className="loadingCard">
          {loading && <p>Loading weather...</p>}
        </div>
        <div className="errorCard">{error && <p>{error}</p>}</div>
      </div>
      <WeatherCard weather={weather}/>
    </>
  );
}

export default App;
