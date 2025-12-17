function Filter({
  categories,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-white p-4 rounded-xl shadow-sm mb-6">
      
      {/* Category Select */}
      <div className="w-full sm:w-64">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
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
          "
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div className="flex-1 w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Maximum Price: <span className="font-semibold text-blue-600">₹{priceRange}</span>
        </label>

        <input
          type="range"
          value={priceRange}
          min={0}
          max={1000}
          onChange={(e) => setPriceRange(e.target.value)}
          className="w-full accent-blue-600 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Filter;
