import { useState } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
import fetchWeather from "./services/weatherService.js";
import SearchForm from "./components/SearchForm.jsx";
import LoadingMessage from "./components/LoadingMessage.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import EmptyStateMessage from "./components/EmptyStateMessage.jsx";
import ForecastList from "./components/ForecastList.jsx";
import TodayDetails from "./components/TodayDetails.jsx";
import RecentSearches from "./components/RecentSearches.jsx";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!city.trim()) return setError("Type something to search!");
    setError("");

    setWeather(null);
    setLoading(true);
    const addRecentSearch = (newCity) => {
      setRecentSearches((prev) =>
        [newCity, ...prev.filter((city) => city !== newCity)].slice(0, 5),
      );
    };

    try {
      const weatherInfo = await fetchWeather(city);
      setWeather(weatherInfo);
      addRecentSearch(city.trim());
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
      <div className="app-shell">
        <h1>Weather Dashboard</h1>
        <SearchForm
          city={city}
          onCityChange={setCity}
          onSearch={handleSearch}
        />
        {!weather && !loading && !error && <EmptyStateMessage />}
        <RecentSearches recentSearches={recentSearches} />
        {loading && <LoadingMessage />}
        {error && <ErrorMessage error={error} />}
        {weather && <WeatherCard weather={weather} />}
      </div>
      {weather && <ForecastList daily={weather.daily} />}
      {weather && <TodayDetails current={weather.current} />}
    </>
  );
}

export default App;
