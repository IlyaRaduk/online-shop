import { IProduct } from "../../models/Interface";
import { AppDispatch } from "../store";
import { productSlice } from "../reducers/productSlice";
import { catalogSlice } from "../reducers/catalogSlice";
import {modalCreateProductSlice} from "../reducers/modalCreateProductSlice";

const addProduct = (product: IProduct, currentPage: number, sort: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(productSlice.actions.productsFetching);
        let response = localStorage.getItem("products")
        if (response) {
            let products: IProduct[] = JSON.parse(response);
            products.push(product);
            localStorage.removeItem('products');
            localStorage.setItem('products', JSON.stringify(products));
            const brends = [...new Set(products.flatMap((product: IProduct) => product.brend))];
            dispatch(catalogSlice.actions.setBrendList(brends));
            dispatch(catalogSlice.actions.setPagesCount(Math.ceil(products.length / 15)));
            switch (sort) {
                case 'priceFromTop':
                    products.sort((a: IProduct, b: IProduct) => b.price - a.price)
                    break;

                case 'priceFromBottom':
                    products.sort((a: IProduct, b: IProduct) => a.price - b.price)
                    break;

                case 'nameFromBottom':
                    products.sort((a: IProduct, b: IProduct) => (a.brend.toLowerCase() < b.brend.toLowerCase()) ? -1 : (a.brend.toLowerCase() > b.brend.toLowerCase()) ? 1 : 0)
                    break;

                case 'nameFromTop':
                    products.sort((a: IProduct, b: IProduct) => (a.brend.toLowerCase() < b.brend.toLowerCase()) ? 1 : (a.brend.toLowerCase() > b.brend.toLowerCase()) ? -1 : 0)
                    break;

                default:
                    break;
            }
            products = products.slice((currentPage - 1) * 15, (currentPage - 1) * 15 + 15);
            dispatch(catalogSlice.actions.productsFetchingSuccess(products));
            dispatch(modalCreateProductSlice.actions.offModalCreateProduct());
        };
    } catch (e) {
        dispatch(catalogSlice.actions.productsFetchingError('Ошибка'));
    }
}
export default addProduct;