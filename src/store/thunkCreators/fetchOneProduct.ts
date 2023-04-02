import { IProduct } from "../../models/IProduct";
import { AppDispatch } from "../store";
import { productSlice } from "../reducers/productSlice";

const fetchOneProduct = (id: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.productsFetching);
        let response = localStorage.getItem("products")
        if (response) {
            let product = JSON.parse(response).find((el: IProduct) => el.barcode == id);
            dispatch(productSlice.actions.productsFetchingSuccess(product));
        };

    } catch (e) {
        dispatch(productSlice.actions.productsFetchingError('Ошибка'));
    }
}
export default fetchOneProduct;