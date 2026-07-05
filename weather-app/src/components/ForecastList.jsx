import ForecastDayCard from "./ForecastDayCard";

function forecastList({ daily }) {
  if (!daily) {
    return null;
  }
  return (
    <div>
      {daily.map((day) => (
        <ForecastDayCard key={day.date} day={day} />
      ))}
    </div>
  );
}

export default forecastList;
