import { IProduct } from "../../models/Interface";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialProduct: IProduct = {
    url: '',
    name: '',
    type: 'bottle',
    size: '',
    barcode: 0,
    manufacturer: '',
    brend: '',
    description: '',
    price: 0,
    typeOfCare: [],
}

interface ICatalogState {
    product: IProduct,
    isLoading: boolean,
    error: string,
    count: number,
}

const initialState: ICatalogState = {
    product: initialProduct,
    isLoading: false,
    error: "",
    count: 1,
}

export const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        productsFetching(state) {
            state.isLoading = true;
        },
        productsFetchingSuccess(state, action: PayloadAction<IProduct>) {
            state.isLoading = false;
            state.error = '';
            state.product = action.payload;
        },
        productsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        addCount(state) {
            state.count += 1;
        },
        minusCount(state) {
            if (state.count > 1) {
                state.count -= 1;
            }
        },
    }
})

export default productSlice.reducer;