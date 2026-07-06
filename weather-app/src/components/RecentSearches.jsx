
function RecentSearches({ recentSearches, onSelectRecentSearch }) {
  if (!Array.isArray(recentSearches) || recentSearches.length === 0) return null;

  return (
    <div>
      {recentSearches.map((city) => (
        <button
          key={city}
          type="button"
          onClick={() => onSelectRecentSearch(city)}>
          {city}
        </button>
      ))}
    </div>
  );
}

export default RecentSearches;
