
import ProductCard from "./ProductCard"



function ProductLIst({products}) {
    console.log("products in list:",products);
    return(
        <div>
            <h1>Products:</h1>
            {products.length ===0 ?<p>No products available</p> : 
         <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
               {products.map((product) => (
               <ProductCard key={product.id} product={product} />
            ))}
        </ul>}
           

        </div>
    )
}

export default ProductLIst;