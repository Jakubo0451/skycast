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
  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto`;
  const weatherResponse = await fetch(weatherUrl);

  if (!weatherResponse.ok) {
    throw new Error("Weather service error");
  }

  const weatherData = await weatherResponse.json();

  const dailyForecast = weatherData.daily.time.map((date, index) => ({
    date,
    maxTemperature: weatherData.daily.temperature_2m_max[index],
    minTemperature: weatherData.daily.temperature_2m_min[index],
    weatherCode: weatherData.daily.weather_code[index],
  }));

  const weatherInfo = {
    city: name,
    country,
    current: {
      temperature: weatherData.current.temperature_2m,
      weatherCode: weatherData.current.weather_code,
      feelsLike: weatherData.current.apparent_temperature,
      humidity: weatherData.current.relative_humidity_2m,
      windSpeed: weatherData.current.wind_speed_10m
    },
    daily: dailyForecast,
  };

  console.log("Weather data: ", weatherInfo);

  return weatherInfo;
}

export default fetchWeather;
