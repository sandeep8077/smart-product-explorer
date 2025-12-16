function ProductCard({ product }) {
  return (
    <li className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
        {product.title}
      </h2>

      {/* Optional description */}
      {/* <p className="text-sm text-gray-600 mb-3 line-clamp-3">
        {product.description}
      </p> */}

      <p className="text-green-600 font-medium text-base mb-4">
        ₹ {product.price}
      </p>

      <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300">
        Add to Cart
      </button>
    </li>
  );
}

export default ProductCard;
