# SkyCast: Open-Meteo Weather App

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

## Features
* **Real-time Weather:** Current temperature, apparent temperature ("feels like"), wind speed, and humidity.
* **7-Day Forecast:** Daily high/low temperatures
* **Search Functionality:** Find weather data for any city worldwide using the integrated geocoding API.

## Tech Stack
* **Frontend:** React.js
* **Styling:** CSS
* **API:** [Open-Meteo](https://open-meteo.com/) (Weather & Geocoding)

## Getting Started

Because Open-Meteo does not require an API key for non-commercial use, setting up this project locally is incredibly simple.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v16 or higher) and `npm` or `yarn` installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/yourusername/skycast-weather.git](https://github.com/yourusername/skycast.git)
   cd skycast-main
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open the app:**
   Navigate to `http://localhost:5173/` in your browser to view the application.


## API Integration Details

This project uses two primary endpoints from Open-Meteo:

1.  **Weather Forecast API:** Fetches current conditions and daily/hourly forecasts based on latitude and longitude coordinates.
    ```text
    https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto
    ```

2.  **Geocoding API:** Converts city names entered by the user into coordinates for the forecast API.
    ```text
    https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city.trim())}&count=1&language=en
    ```
