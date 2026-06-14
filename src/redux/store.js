import { configureStore, combineReducers } from "@reduxjs/toolkit";
import servicesReducer from "./slices/servicesSlice";
import CartReducer from "./slices/cartSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import userReducer from "./slices/user/userSlice";
import OrdersReducer from "./slices/ordersSlice";


const reducers= combineReducers({
    services: servicesReducer,
    cart: CartReducer,
    user: userReducer,
    order: OrdersReducer,
})

const persistConfig = {
    key: "root",
    storage: storage.default, 
    whitelist: ["cart", "user"],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store= configureStore({
    reducer: persistedReducer,
});

export const persistor= persistStore(store);



