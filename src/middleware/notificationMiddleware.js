

import { showNotification} from "../features/notifications/notificationSlice";
import { saveAsyncFavoriteApi } from "../features/products/productSlice";
import { removeAsyncFavoriteApi } from "../features/products/productSlice";



export const notificationMiddleware = (store)=>{
    return (next) =>{
         return (action)=>{
             const result = next(action);
             
           if(saveAsyncFavoriteApi.fulfilled.match(action)){
            store.dispatch(showNotification({
                 message: "Added to favorites ❤️",
                 type: "success",
            }))}

           if(removeAsyncFavoriteApi.fulfilled.match(action)){
            store.dispatch(showNotification({
                  message: "Removed from favorites 💔",
                  type: "info",
            }))
           }

           return result;
            
           
             

             

        }
    }

}