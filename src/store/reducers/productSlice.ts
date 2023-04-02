import { IProduct } from "../../models/IProduct";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICatalogState {
    product: IProduct,
    isLoading: boolean,
    error: string,
}
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

const initialState: ICatalogState = {
    product: initialProduct,
    isLoading: false,
    error: "",
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
    }
})

export default productSlice.reducer;