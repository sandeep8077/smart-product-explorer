import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { fetchAsyncProducts } from "../features/products/productSlice";
import ProductLIst from "../components/ProductLIst";


function Home(){
    const {isLoading,error } = useSelector((state)=>state.product);
    const dispatch = useDispatch();
    useEffect(()=>{
    dispatch(fetchAsyncProducts());
 },[dispatch]);

    return(
        <div>
            <h1>smart product explorer</h1>
            {isLoading && <p>Loading products...</p>}
            {error && <p>{error}</p>}
            <ProductLIst/>
        </div>
    )
}

export default Home;