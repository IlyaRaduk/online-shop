import style from './Catalog.module.scss';
import { FC, useEffect } from "react";
import Aside from './Aside/Aside';
import Products from './Products/Products';
import { useAppDisaptch, useAppSelector } from '../../../hooks/redux';
import fetchAllProductsWithFilters from '../../../store/thunkCreators/fetchAllProductsWithFilters';
import { catalogSlice } from '../../../store/reducers/catalogSlice';
import { IFilterItem } from '../../../models/Interface';


const Сatalog: FC = () => {
    const { sort, filterType, currentPage, startPriceFilter, endPriceFilter, filterBrends, mobileMenuActive } = useAppSelector((state => state.catalogSlice));
    const dispatch = useAppDisaptch();


    const filterItems: IFilterItem[] = [{ type: 'body', value: 'Уход за телом' }, { type: 'hands', value: 'Уход за руками' },
    { type: 'feet', value: 'Уход за ногами' }, { type: 'face', value: 'Уход за лицом' },
    { type: 'hair', value: 'Уход за волосами' }, { type: 'tan', value: 'Средства для загара' },
    { type: 'shaving', value: 'Средства для бритья' }, { type: 'present', value: 'Подарочные наборы' },
    { type: 'hygiene', value: 'Гигиеническая продукция' }, { type: 'oral', value: 'Гигиена полости рта' },
    { type: 'paper', value: 'Бумажная продукция' }]

    useEffect(() => {
        dispatch(fetchAllProductsWithFilters(sort, filterType, currentPage, startPriceFilter, endPriceFilter, filterBrends));
    }, [])

    useEffect(() => {
        dispatch(fetchAllProductsWithFilters(sort, filterType, currentPage, startPriceFilter, endPriceFilter, filterBrends));
    }, [sort, filterType, currentPage])

    return (
        <main>
            <div className={style.catalog}>
                <p className={style.catalog__title}>
                    Косметика и гигиена
                </p>
                {
                    mobileMenuActive ? null :
                        <div className={style.catalog__sort} >
                            <label className={style.catalog__label} htmlFor="sort">Сортировка:</label>
                            <select value={sort} onChange={(e) => dispatch(catalogSlice.actions.setSortType(e.target.value))} name="sort" id="sort">
                                <option value="priceFromTop">по убыванию цены</option>
                                <option value="priceFromBottom">по возрастанию цены</option>
                                <option value="nameFromBottom">по названию</option>
                                <option value="nameFromTop">по названию с конца</option>
                            </select>
                        </div>
                }
                <div className={style.catalog__prop}>
                    <Aside />
                </div>
                {
                    mobileMenuActive ? null
                        : <div className={style.filter}>
                            <ul className={style.filter__list}>
                                {filterItems.map((el, index) => {
                                    if (el.type === filterType) { return <li onClick={() => dispatch(catalogSlice.actions.setfilterType(el.type))} key={index} className={[style.filter__item, style.activeFilter].join(' ')}>{el.value}</li> }
                                    else {
                                        return <li onClick={() => dispatch(catalogSlice.actions.setfilterType(el.type))} key={index} className={style.filter__item}>{el.value}</li>
                                    }
                                })}
                            </ul>
                        </div>
                }

            </div>
            {
                mobileMenuActive ? null
                    :
                    <div className={style.content}>
                        <div className={style.aside}>
                            <Aside />
                        </div>
                        <Products />
                    </div>
            }
        </main>
    )
}
export default Сatalog;