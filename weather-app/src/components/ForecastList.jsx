import ForecastDayCard from "./ForecastDayCard";

function forecastList({ daily, unit }) {
  if (!daily) {
    return null;
  }
  return (
    <div>
      {daily.map((day) => (
        <ForecastDayCard key={day.date} day={day} unit={unit} />
      ))}
    </div>
  );
}

export default forecastList;
