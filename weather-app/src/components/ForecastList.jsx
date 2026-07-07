import ForecastDayCard from "./ForecastDayCard";

function ForecastList({ daily, unit, onDayClick }) {
  if (!daily) {
    return null;
  }
  return (
    <div>
      {daily.map((day) => (
        <ForecastDayCard
          key={day.date}
          day={day}
          unit={unit}
          onClick={() => onDayClick(day)}
        />
      ))}
    </div>
  );
}

export default ForecastList;
