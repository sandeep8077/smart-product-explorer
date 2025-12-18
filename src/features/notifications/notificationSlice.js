import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    message:null,
    type:"success",
}

const notificationSlice  = createSlice({
    name:'notification',
    initialState,
    reducers:{
        showNotification(state,action){
           state.message = action.payload.message;
           state.type = action.payload.type;
        },
        removeNotification(state){
            state.message=null;
        }
    }
})

export const {showNotification,removeNotification} = notificationSlice.actions;
export default notificationSlice.reducer;
export const notificationSelector = (state)=>state.notification;