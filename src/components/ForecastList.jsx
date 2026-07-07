import ForecastDayCard from "./ForecastDayCard";

function ForecastList({ daily, unit, onDayClick }) {
  if (!daily) {
    return null;
  }
  return (
    <div className="forecast-panel">
      <div className="forecast-list">
        {daily.map((day) => (
          <ForecastDayCard
            key={day.date}
            day={day}
            unit={unit}
            onClick={() => onDayClick(day)}
          />
        ))}
      </div>
    </div>
  );
}

export default ForecastList;
