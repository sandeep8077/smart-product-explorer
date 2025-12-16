import { useEffect , useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncProducts } from "../features/products/productSlice";
import ProductLIst from "../components/ProductLIst";
import Search from "../components/Search";
import { productSelector } from "../features/products/productSlice";
import { useDeferredValue } from "react";

function Home() {
  const { isLoading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [search,setSearch] = useState("");
  const products = useSelector(productSelector);

  const deferredSearch = useDeferredValue(search);


  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, [dispatch]);

  const fillteredProducts = products.filter((product)=>
    product.title.toLowerCase().includes(deferredSearch.toLowerCase()));


  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Page Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Smart Product Explorer
      </h1>

      <Search search={search} setSearch={setSearch} />

      {search !== deferredSearch && (
         <p className="text-xs text-gray-500 mt-1">
            Updating results...
         </p>
)}

      {/* Loading State */}
      {isLoading && (
        <p className="text-center text-blue-600 font-medium">
          Loading products...
        </p>
      )}

      {/* Error State */}
      {error && (
        <p className="text-center text-red-500 font-medium">
          {error}
        </p>
      )}

      {/* Product List */}
      {!isLoading && !error && <ProductLIst products={fillteredProducts} />}

      <h3>Totel Products:{fillteredProducts.length}</h3>
    </div>
  );
}

export default Home;
