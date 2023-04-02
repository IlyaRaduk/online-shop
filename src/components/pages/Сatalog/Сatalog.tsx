import style from './Catalog.module.scss';
import { FC, useEffect } from "react";
import Aside from './Aside/Aside';
import Products from './Products/Products';
import { useAppDisaptch, useAppSelector } from '../../../hooks/redux';
import fetchAllProducts from '../../../store/thunkCreators/fetchAllProducts';
import { catalogSlice } from '../../../store/reducers/catalogSlice';


const Сatalog: FC = () => {
    const {sort} = useAppSelector((state => state.catalogSlice));
    const dispatch = useAppDisaptch();

    useEffect(() => {
        dispatch(fetchAllProducts(sort));
    }, [])

    useEffect(() => {
        dispatch(fetchAllProducts(sort));
    }, [sort])

    return (
        <main>
            <div className={style.catalog}>
                <p className={style.catalog__title}>
                    Косметика и гигиена
                </p>
                <div className={style.catalog__sort} >
                    <label className={style.catalog__label} htmlFor="sort">Сортировка:</label>
                    <select value={sort} onChange={(e)=> dispatch(catalogSlice.actions.setSortType(e.target.value))} name="sort" id="sort">
                        <option  value="priceFromTop">по убыванию цены</option>
                        <option  value="priceFromBottom">по возрастанию цены</option>
                        <option  value="nameFromBottom">по названию</option>
                        <option  value="nameFromTop">по названию с конца</option>
                    </select>
                </div>
                <div className={style.catalog__prop}>
                    <Aside />
                </div>
                <div className={style.filter}>
                    <ul className={style.filter__list}>
                        <li className={style.filter__item}>Уход за телом</li>
                        <li className={style.filter__item}>Уход за руками</li>
                        <li className={style.filter__item}>Уход за ногами</li>
                        <li className={style.filter__item}>Уход за лицом</li>
                        <li className={style.filter__item}>Уход за волосами</li>
                        <li className={style.filter__item}>Средства для загара</li>
                        <li className={style.filter__item}>Средства для бритья</li>
                        <li className={style.filter__item}>Подарочные наборы</li>
                        <li className={style.filter__item}>Гигиеническая продукция</li>
                        <li className={style.filter__item}>Гигиена полости рта</li>
                        <li className={style.filter__item}>Бумажная продукция</li>
                    </ul>
                </div>
            </div>
            <div className={style.content}>
                <div className={style.aside}>
                    <Aside />
                </div>
                <Products />
            </div>
        </main>
    )
}
export default Сatalog;