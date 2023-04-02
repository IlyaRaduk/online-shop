import { catalogSlice } from "../reducers/catalogSlice";
import { AppDispatch } from "../store";
import { IProduct } from './../../models/IProduct';

const fetchAllProducts = (sort: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(catalogSlice.actions.productsFetching);
        let response = localStorage.getItem("products")
        if (response) {
            let products = JSON.parse(response);
            switch (sort) {
                case 'priceFromTop':
                    products.sort((a: IProduct, b: IProduct) => b.price - a.price)
                    break;

                case 'priceFromBottom':
                    products.sort((a: IProduct, b: IProduct) => a.price - b.price)
                    break;

                case 'nameFromBottom':
                    products.sort((a: IProduct, b: IProduct) => (a.name.toLowerCase() < b.name.toLowerCase()) ? 1 : (a.name.toLowerCase() > b.name.toLowerCase()) ? -1 : 0)
                    break;

                case 'nameFromTop':
                    products.sort((a: IProduct, b: IProduct) => (a.name.toLowerCase() < b.name.toLowerCase()) ? -1 : (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : 0)
                    break;

                default:
                    break;
            }
            dispatch(catalogSlice.actions.productsFetchingSuccess(products));
        };

    } catch (e) {
        dispatch(catalogSlice.actions.productsFetchingError('Ошибка'));
    }
}
export default fetchAllProducts;