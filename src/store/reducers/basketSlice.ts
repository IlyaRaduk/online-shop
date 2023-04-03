import { IProduct} from "../../models/IProduct";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IbasketSlice {
   productsBuy:IProduct[],
}

const initialState: IbasketSlice = {
    productsBuy:[],
}

export const basketSlice = createSlice({
    name: "basketSlice",
    initialState,
    reducers: {
        addInBasket(state, action: PayloadAction<IProduct>) {
            state.productsBuy.push(action.payload);
        },
    }
})

export default basketSlice.reducer;