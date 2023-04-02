import { catalogSlice } from "../reducers/catalogSlice";
import { AppDispatch } from "../store";
import { IProduct } from './../../models/IProduct';
import { typeOfCare } from "./../../models/IProduct";

const fetchAllProducts = (sort: string, filtertype: typeOfCare | null) => async (dispatch: AppDispatch) => {
    try {
        dispatch(catalogSlice.actions.productsFetching);
        let response = localStorage.getItem("products")
        if (response) {
            let products = JSON.parse(response);
            if (filtertype){
                products = products.filter((obj:IProduct) => obj.typeOfCare.includes(filtertype));
            }
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
            dispatch(catalogSlice.actions.productsFetchingSuccess(products));
        };

    } catch (e) {
        dispatch(catalogSlice.actions.productsFetchingError('Ошибка'));
    }
}
export default fetchAllProducts;