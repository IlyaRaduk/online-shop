import { useAppDisaptch, useAppSelector } from '../../../../../hooks/redux';
import style from './Price.module.scss';
import { FC } from "react";
import { catalogSlice } from '../../../../../store/reducers/catalogSlice'; 

const Price: FC = () => {
    const { startPriceFilter, endPriceFilter } = useAppSelector((state => state.catalogSlice));
    const dispatch = useAppDisaptch();

    return (
        <div className={style.price}>
            <div className={style.price__title}>
                Цена <span>₸</span>
            </div>
            <div className={style.price__counts}>
                <input  onChange={(e)=>{if(!isNaN(Number(e.target.value))){ dispatch(catalogSlice.actions.setStartPriceFilter(Number(e.target.value)))}}} value={startPriceFilter?startPriceFilter:''} className={style.price__count} type="text" />
                <span>-</span>
                <input onChange={(e)=>{if(!isNaN(Number(e.target.value))){ dispatch(catalogSlice.actions.setEndPriceFilter(Number(e.target.value)))}}} value={endPriceFilter?endPriceFilter:''} className={style.price__count} type="text" />
            </div>
        </div>
    )
}
export default Price;