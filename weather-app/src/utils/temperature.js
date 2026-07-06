export const convertTemperature = (celsius, unit) => {
  const fahrenheit = (celsius * 9) / 5 + 32;

  if (unit === "celsius") return `${Math.round(celsius)} °C`;
  if (unit === "fahrenheit") return `${Math.round(fahrenheit)} °F`;

  return celsius;
};