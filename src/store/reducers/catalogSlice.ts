import { IProduct, typeOfCare } from "../../models/IProduct";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICatalogState {
    products: IProduct[],
    isLoading: boolean,
    error: string,
    sort: string,
    filterType: typeOfCare | null,
}

const initialState: ICatalogState = {
    products: [],
    isLoading: false,
    error: "",
    sort: 'nameFromBottom',
    filterType: null,
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
        },
        setfilterType(state, action: PayloadAction<typeOfCare>) {
            if (state.filterType == action.payload) {
                state.filterType = null;
            }
            else {
                state.filterType = action.payload;
            }
        }
    }
})

export default catalogSlice.reducer;