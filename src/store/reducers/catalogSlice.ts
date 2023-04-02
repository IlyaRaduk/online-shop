import { IProduct } from "../../models/IProduct";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICatalogState {
    products: IProduct[],
    isLoading: boolean,
    error: string,
    sort: string,
}

const initialState: ICatalogState = {
    products: [],
    isLoading: false,
    error: "",
    sort: 'nameFromBottom',
}

export const catalogSlice = createSlice({
    name: "catalogSlice",
    initialState,
    reducers: {
        productsFetching(state) {
            state.isLoading = true;
        },
        productsFetchingSuccess(state, action: PayloadAction<IProduct[]>) {
            state.isLoading = false;
            state.error = '';
            state.products = action.payload;
        },
        productsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        setSortType(state, action: PayloadAction<string>) {
            state.sort = action.payload;
        }
    }
})

export default catalogSlice.reducer;