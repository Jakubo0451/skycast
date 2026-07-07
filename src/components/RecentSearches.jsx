
function RecentSearches({ recentSearches, onSelectRecentSearch }) {
  if (!Array.isArray(recentSearches) || recentSearches.length === 0) return null;

  return (
    <div className="recent-searches">
      {recentSearches.map((city) => (
        <button className="recent_button"
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
