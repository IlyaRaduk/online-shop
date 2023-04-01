import axios from "axios";
import { IProduct } from "../../models/IProduct";
import {catalogSlice} from "../reducers/catalogSlice";
import { AppDispatch } from "../store";

const fetchNotes = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(catalogSlice.actions.productsFetching);
        const response = await axios.get<IProduct[]>('https://json-server-online-shop-vunxnyt73-llya-raduk-mailru.vercel.app/products');
        localStorage.setItem('products', JSON.stringify(response.data));
        dispatch(catalogSlice.actions.productsFetchingSuccess(response.data));

    } catch (e) {
        dispatch(catalogSlice.actions.productsFetchingError('Ошибка'));
    }
}
export default fetchNotes;