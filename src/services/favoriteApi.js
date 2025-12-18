

export const saveFavoriteApi= (id)=>{
    new Promise((resolve)=>{
       setTimeout(() => {
        resolve(id)
        
       }, 500);
    })
    
}

export const removeFavoriteApi = (id)=>{

    new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(id)
        },500)
    })
}