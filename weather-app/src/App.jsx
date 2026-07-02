import { useState } from "react";
import "./App.css";

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

      const weatherUrl = `https://open-meteo.com${latitude}&longitude=${longitude}&current=temperature_2m`;

      const weatherResponse = await fetch(weatherUrl);

      if (!weatherResponse.ok) {
        throw new Error("Weather service error");
      }

      const weatherData = await weatherResponse.json();

      console.log("Weather data: ", weatherData);
      setWeather(weatherData);
    } catch (error) {
        console.error("Error caught in block: ", error);
        setError(error.message || "Something went wrong");
        setWeather(null)
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
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
}

export default App;
