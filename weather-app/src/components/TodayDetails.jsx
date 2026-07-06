
function TodayDetails({ current }) {
  return (
    <div>
        <p>Feels like: {current.feelsLike}</p>
        <p>Humidity: {current.humidity}</p>
        <p>Wind speed: {current.windSpeed}</p>
    </div>
  )
}

export default TodayDetails