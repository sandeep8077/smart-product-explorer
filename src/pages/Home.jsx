import { useEffect , useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncProducts } from "../features/products/productSlice";
import ProductLIst from "../components/ProductLIst";
import Search from "../components/Search";
import { productSelector } from "../features/products/productSlice";
import { useDeferredValue } from "react";
import Filter from "../components/Filter";

function Home() {
  const { isLoading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [search,setSearch] = useState("");
  const products = useSelector(productSelector);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const deferredSearch = useDeferredValue(search);

  const categories = ["all",...new Set(products.map((product)=>product.category))];
  const [priceRange, setPriceRange] = useState(1000);


  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, [dispatch]);


  //  fitering by serach
  const fillteredProducts = products.filter((product)=>
    product.title.toLowerCase().includes(deferredSearch.toLowerCase()))
   
  // filtering by category
    .filter((product)=>
     selectedCategory === "all" ? true : product.category === selectedCategory)

  // filtering by price
    .filter((product)=>
    product.price<=priceRange
    );
  


  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Page Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Smart Product Explorer
      </h1>

      <Search search={search} setSearch={setSearch} />
      <Filter
       categories={categories} selectedCategory={selectedCategory} 
       setSelectedCategory={setSelectedCategory} 
       priceRange={priceRange} setPriceRange={setPriceRange}/>

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
