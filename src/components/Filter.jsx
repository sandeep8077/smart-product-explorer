function Filter({
    categories, 
    selectedCategory, 
    setSelectedCategory,
    priceRange,
    setPriceRange
}){
    return(
        <>

          <select value={selectedCategory} onChange={(e)=>setSelectedCategory(e.target.value)}>
              {categories.map((category)=>(
                <option  key={category} value={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</option>
              ))}
         </select>


        <div>
             <label htmlFor="">
                 Maximum Price:{priceRange}
             </label>
             <input  type='range' value={priceRange} min={0} max={1000}
                onChange={(e)=>setPriceRange(e.target.value)}
             />
        </div>
       
        </>
      

        
    )
}
export default Filter;