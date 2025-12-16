function ProductCard({product,id}){
    return(
        <li key={id}>
            <h2>{product.title}</h2>
            {/* <p>{product.description}</p> */}
            <p>Price: ${product.price}</p>
        </li>
    )
}

export default ProductCard;