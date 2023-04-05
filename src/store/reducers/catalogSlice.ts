import { IProduct, typeOfCare } from "../../models/Interface";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICatalogState {
    products: IProduct[],
    isLoading: boolean,
    error: string,
    mobileMenuActive: boolean,
    sort: string,
    filterType: typeOfCare | null,
    pagesCount: number,
    currentPage: number,
    startPriceFilter: number | null,
    endPriceFilter: number | null,
    brendsList: string[],
    filterBrends: string[],
    searchBrends: string,
    isAdmin: boolean,
}

const initialState: ICatalogState = {
    products: [],
    isLoading: false,
    error: "",
    mobileMenuActive: false,
    sort: 'nameFromBottom',
    filterType: null,
    pagesCount: 0,
    currentPage: 1,
    startPriceFilter: null,
    endPriceFilter: null,
    brendsList: [],
    filterBrends: [],
    searchBrends: '',
    isAdmin: false,
}

export const catalogSlice = createSlice({
    name: "catalogSlice",
    initialState,
    reducers: {
        productsFetching(state) {
            state.isLoading = true;
        },
        productsFetchingSuccess(state, action: PayloadAction<IProduct[]>) {
            state.isLoading = false;
            state.error = '';
            state.products = action.payload;
        },
        productsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        setSortType(state, action: PayloadAction<string>) {
            state.sort = action.payload;
        },
        setfilterType(state, action: PayloadAction<typeOfCare>) {
            if (state.filterType == action.payload) {
                state.filterType = null;
            }
            else {
                state.filterType = action.payload;
            }
        },
        setPagesCount(state, action: PayloadAction<number>) {
            state.pagesCount = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        setStartPriceFilter(state, action: PayloadAction<number>) {
            state.startPriceFilter = action.payload;
        },
        setEndPriceFilter(state, action: PayloadAction<number>) {
            state.endPriceFilter = action.payload;
        },
        removeAllFilter(state) {
            state.startPriceFilter = null;
            state.endPriceFilter = null;
            state.filterBrends = [];
            state.searchBrends = '';
        },
        setBrendList(state, action: PayloadAction<string[]>) {
            state.brendsList = action.payload;
        },
        setFilterBrends(state, action: PayloadAction<string>) {
            if (state.filterBrends.includes(action.payload)) {
                state.filterBrends = state.filterBrends.filter(brend => brend !== action.payload);
            } else {
                state.filterBrends.push(action.payload);
            }
        },
        setSearchBrends(state, action: PayloadAction<string>) {
            state.searchBrends = action.payload;
        },
        toggleMobileMenu(state) {
            state.mobileMenuActive = !state.mobileMenuActive;
        },
        toggleAdmin(state) {
            state.isAdmin = !state.isAdmin;
        },
    }
})

export default catalogSlice.reducer;