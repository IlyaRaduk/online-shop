import { IProduct, IProductWithCount } from "../../models/Interface";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IbasketSlice {
    groupedProductsInBasket: IProductWithCount[]
    priceInBasket: number,
}

const initialState: IbasketSlice = {
    groupedProductsInBasket: [],
    priceInBasket: 0,
}

export const basketSlice = createSlice({
    name: "basketSlice",
    initialState,
    reducers: {
        addInBasket(state, action: PayloadAction<IProduct>) {
            state.priceInBasket += action.payload.price;

            const index = state.groupedProductsInBasket.findIndex((item: IProductWithCount) => item.barcode === action.payload.barcode);

            if (index !== -1) {
                state.groupedProductsInBasket[index].count += 1;
            } else {
                state.groupedProductsInBasket.push({ ...action.payload, count: 1 });
            }

        },
        clearBasket(state) {
            state.groupedProductsInBasket = [];
            state.priceInBasket = 0;
        },
        removeOneFromBasket(state, action: PayloadAction<IProduct>) {
            state.priceInBasket -= action.payload.price;

            const index = state.groupedProductsInBasket.findIndex((item: IProductWithCount) => item.barcode === action.payload.barcode);

            if (index !== -1) {
                if (state.groupedProductsInBasket[index].count > 1) {
                    state.groupedProductsInBasket[index].count -= 1;
                } else {
                    state.groupedProductsInBasket.splice(index, 1);
                }
            }
        },
        removeFromBasket(state, action: PayloadAction<IProduct>) {
            state.groupedProductsInBasket = state.groupedProductsInBasket.filter(product =>
                product.barcode !== action.payload.barcode);
            state.priceInBasket = state.groupedProductsInBasket.reduce((sum, product) => sum + product.price * product.count, 0);
        },
    }
})

export default basketSlice.reducer;