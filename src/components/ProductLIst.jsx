import { productSelector } from "../features/products/productSlice"
import ProductCard from "./ProductCard"
import { useSelector } from "react-redux"
function ProductLIst(){
    const products = useSelector(productSelector)
    console.log("products in list:",products);
    return(
        <div>
            <h1>Products:</h1>
            {products.length ===0 ?<p>No products available</p> : 
             <ul>
                {products.map((product)=>(
                <ProductCard product = {product} id={product.id}/>

                ))}
            </ul>}
           

        </div>
    )
}

export default ProductLIst;