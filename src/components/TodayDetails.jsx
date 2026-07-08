import { convertTemperature } from "../utils/temperature";

function TodayDetails({ current, unit }) {
  return (
    <div className="today-details">
      <div className="detail-card">
        <p>Feels like: {convertTemperature(current.feelsLike, unit)}</p>
      </div>
      <div className="detail-card">
        <p>Humidity: {current.humidity}</p>
      </div>
      <div className="detail-card">
        <p>Wind speed: {current.windSpeed}</p>
      </div>
    </div>
  );
}

export default TodayDetails;
