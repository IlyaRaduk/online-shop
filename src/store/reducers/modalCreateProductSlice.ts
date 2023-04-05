import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../models/Interface';

interface ImodalCreateProductSlice {
    isModalCreateProduct: boolean,
    type: 'edit' | 'add',
    productEdit: IProduct | null,
}

const initialState: ImodalCreateProductSlice = {
    isModalCreateProduct: false,
    type: 'add',
    productEdit: null,
}

export const modalCreateProductSlice = createSlice({
    name: "modalCreateProductSlice",
    initialState,
    reducers: {
        onModalCreateProduct(state, action: PayloadAction<{ type: 'edit' | 'add', product: IProduct | null }>) {
            state.productEdit = action.payload.product;
            state.type = action.payload.type;
            state.isModalCreateProduct = true;
        },
        offModalCreateProduct(state) {
            state.isModalCreateProduct = false;
            state.productEdit=null;
        },
    }
})

export default modalCreateProductSlice.reducer;