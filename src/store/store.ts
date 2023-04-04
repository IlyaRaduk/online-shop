import { combineReducers,configureStore } from "@reduxjs/toolkit";
import catalogSlice from "./reducers/catalogSlice";
import productSlice from "./reducers/productSlice";
import basketSlice from "./reducers/basketSlice";


const rootReducer = combineReducers({
    catalogSlice,
    productSlice,
    basketSlice,
})

export const setupStore = ()=>{
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];