function Sorting({ sortBy, setSortBy }) {
  return (
    <div className="w-full sm:w-64 mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Sort By
      </label>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="
          w-full
          border border-gray-300
          rounded-lg
          px-3 py-2
          text-sm
          bg-white
          text-gray-800
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
          transition
        "
      >
        <option value="highToLow">Price: High to Low</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}

export default Sorting;
