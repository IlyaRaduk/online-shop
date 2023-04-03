import { catalogSlice } from "../reducers/catalogSlice";
import { AppDispatch } from "../store";
import { IProduct } from './../../models/IProduct';
import { typeOfCare } from "./../../models/IProduct";



const fetchAllProductsWithFilters = (sort: string, filtertype: typeOfCare | null, 
    currentPage: number, startPriceFilter: number | null, endPriceFilter: number | null,
    filterBrends:string[]) => async (dispatch: AppDispatch) => {
    try {
        dispatch(catalogSlice.actions.productsFetching);
        
        let response = localStorage.getItem("products")
        if (response) {
            let products:IProduct[] = JSON.parse(response);
            const brends = [...new Set(products.flatMap((product:IProduct)=> product.brend))];
            dispatch(catalogSlice.actions.setBrendList(brends));
            if (filtertype) {
                products = products.filter((product: IProduct) => product.typeOfCare.includes(filtertype));
            }
            if (startPriceFilter) {
                products = products.filter((product: IProduct) => product.price >= startPriceFilter);
            }
            if (endPriceFilter) {
                products = products.filter((product: IProduct) => product.price <= endPriceFilter);
            }
            if(filterBrends.length!==0){
                products = products.filter((product: IProduct) => filterBrends.includes(product.brend));
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
            dispatch(catalogSlice.actions.setPagesCount(Math.ceil(products.length / 15)));
            products = products.slice((currentPage - 1) * 15, (currentPage - 1) * 15 + 15);
            dispatch(catalogSlice.actions.productsFetchingSuccess(products));
        };

    } catch (e) {
        dispatch(catalogSlice.actions.productsFetchingError('Ошибка'));
    }
}
export default fetchAllProductsWithFilters;