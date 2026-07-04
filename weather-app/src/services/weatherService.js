async function fetchWeather(city) {
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
        weatherCode: weatherData.current.weather_code,
      };
      console.log("Weather data: ", weatherInfo);

      return weatherInfo

}

export default fetchWeather

