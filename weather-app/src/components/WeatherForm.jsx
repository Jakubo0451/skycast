export default function WeatherForm ({ city, setCity, fetchWeather }) {
    function handleChange(e) {
        setCity(e.target.value);
    };


function handleSubmit(e) {
    e.preventDefault();
    //this function makes the API call that fetches the weather data
    fetchWeather();
    setCity("");
}

return (
    <form className="weatherForm" onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Enter City Name"
        onChange={handleChange}
        value={city}
        />
        <button>Get Weather</button>
    </form>
)
}