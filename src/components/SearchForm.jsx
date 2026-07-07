
function SearchForm({city, onCityChange, onSearch}) {
  return (
        <form className="top_section" onSubmit={onSearch}>
          <input
            type="text"
            placeholder="Search a city name"
            value={city}
            onChange={(e) => onCityChange(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
  )
}

export default SearchForm