import { useState } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
import fetchWeather from "./services/weatherService.js";
import SearchForm from "./components/SearchForm.jsx";
import LoadingMessage from "./components/LoadingMessage.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import EmptyStateMessage from "./components/EmptyStateMessage.jsx";

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
      const weatherInfo = await fetchWeather(city);
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
        <SearchForm
          city={city}
          onCityChange={setCity}
          onSearch={handleSearch}
        />
        {!weather && !loading && !error && <EmptyStateMessage />}
        {loading && <LoadingMessage />}
        {error && <ErrorMessage error={error} />}
      </div>
      <WeatherCard weather={weather} />
    </>
  );
}

export default App;
