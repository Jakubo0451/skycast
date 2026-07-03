import { useState } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
import fetchWeather from "./services/weatherService.js"

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
      const weatherInfo = await fetchWeather(city)
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
