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
import ToggleButton from "./components/ToggleButton.jsx";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [unit, setUnit] = useState("celsius");
  const [selectedDay, setSelectedDay] = useState(null);

const handleDayClick = (day) => {
  console.log(day);
  setSelectedDay(day);
};
  const addRecentSearch = (newCity) => {
    setRecentSearches((prev) =>
      [newCity, ...prev.filter((city) => city !== newCity)].slice(0, 5),
    );
  };

  const toggleUnit = () => {
    setUnit((prev) => (prev === "celsius" ? "fahrenheit" : "celsius"));
  };

  const handleRecentSearch = (selectedCity) => {
    setCity(selectedCity);
    searchWeather(selectedCity);
  };

  const searchWeather = async (cityToSearch) => {
    if (!cityToSearch.trim()) return setError("Type something to search!");
    setError("");

    setWeather(null);
    setLoading(true);

    try {
      const weatherInfo = await fetchWeather(cityToSearch);
      setWeather(weatherInfo);
      addRecentSearch(cityToSearch.trim());
    } catch (error) {
      console.error("Error caught in block: ", error);
      setError(error.message || "Something went wrong");
      setWeather(null);
      setSelectedDay(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchWeather(city);
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
        <ToggleButton unit={unit} onToggle={toggleUnit} />
        <RecentSearches
          recentSearches={recentSearches}
          onSelectRecentSearch={handleRecentSearch}
        />
        {loading && <LoadingMessage />}
        {error && <ErrorMessage error={error} />}
        {weather && <WeatherCard weather={weather} unit={unit} selectedDay={selectedDay} />}
      </div>
      {weather && (
        <ForecastList
          daily={weather.daily}
          unit={unit}
          onDayClick={handleDayClick}
        />
      )}
      {weather && <TodayDetails current={weather.current} unit={unit} />}
    </>
  );
}

export default App;
