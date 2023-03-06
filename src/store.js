import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./routes/auth/authSlice";
import imcSlice from "./routes/imcs/imcSlice";


const store = configureStore({
  reducer: {

    auth: authSlice,
    imcs: imcSlice
    
  }

})

export default store