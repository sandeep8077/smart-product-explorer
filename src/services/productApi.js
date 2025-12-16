
const BASE_URL = "https://fakestoreapi.com/products";


// fetch products from the API
export const fetchProductsApi  = async()=>{
    const response = await fetch(BASE_URL);
    if(!response.ok){
        throw new Error('Failed to fetch products');
    }
    return await response.json();
    
}