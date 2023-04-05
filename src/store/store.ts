import { combineReducers,configureStore } from "@reduxjs/toolkit";
import catalogSlice from "./reducers/catalogSlice";
import productSlice from "./reducers/productSlice";
import basketSlice from "./reducers/basketSlice";
import modalCreateProductSlice from "./reducers/modalCreateProductSlice";


const rootReducer = combineReducers({
    catalogSlice,
    productSlice,
    basketSlice,
    modalCreateProductSlice,
})

export const setupStore = ()=>{
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];