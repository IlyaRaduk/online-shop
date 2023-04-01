import axios from "axios";
import { IProduct } from "../../models/IProduct";
import { AppDispatch } from "../store";
import {productSlice} from "../reducers/productSlice";

const fetchOneProduct = (id:number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.productsFetching);
        const response = localStorage.getItem("products")
        console.log(response);
        // dispatch(productSlice.actions.productsFetchingSuccess(response)[id]));

    } catch (e) {
        dispatch(productSlice.actions.productsFetchingError('Ошибка'));
    }
}
export default fetchOneProduct;