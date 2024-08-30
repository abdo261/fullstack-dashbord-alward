import { configureStore } from "@reduxjs/toolkit";
import { centreReducer } from "./slices/centreSlice";
import { userReducer } from "./slices/userSlice";
import { authReducer } from "./slices/authSlice";
const store = configureStore({
  reducer: {
    centre: centreReducer,
    user:userReducer,
    auth:authReducer
  },
});
export default store;
