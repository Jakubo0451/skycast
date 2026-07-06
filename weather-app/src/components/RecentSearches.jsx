
function RecentSearches({ recentSearches }) {
  if (!recentSearches || recentSearches.length === 0) return null;

  return (
    <div>
      {recentSearches.map((city) => (
        <button key={city}>{city}
        </button>
      ))}
    </div>
  );
}

export default RecentSearches;
