function Search({ search, setSearch }) {
  return (
    <div className="w-full max-w-md mx-auto mb-4">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="
          w-full
          px-4 py-2
          border border-gray-300
          rounded-lg
          text-sm
          text-gray-800
          placeholder-gray-400
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
          transition
        "
      />
    </div>
  );
}

export default Search;
