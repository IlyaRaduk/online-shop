import { useAppSelector,useAppDisaptch } from '../../../../../hooks/redux';
import { IFilterItem } from '../../../../../models/Interface';
import {catalogSlice} from '../../../../../store/reducers/catalogSlice';

import style from './Filter.module.scss';
import { FC } from "react";

const Filter: FC = () => {
    const { filterType } = useAppSelector((state => state.catalogSlice));
    const dispatch = useAppDisaptch();

    const filterItems:IFilterItem[] = [{ type: 'body', value: 'Уход за телом' }, { type: 'hands', value: 'Уход за руками' },
    { type: 'feet', value: 'Уход за ногами' }, { type: 'face', value: 'Уход за лицом' },
    { type: 'hair', value: 'Уход за волосами' }, { type: 'tan', value: 'Средства для загара' },
    { type: 'shaving', value: 'Средства для бритья' }, { type: 'present', value: 'Подарочные наборы' },
    { type: 'hygiene', value: 'Гигиеническая продукция' }, { type: 'oral', value: 'Гигиена полости рта' },
    { type: 'paper', value: 'Бумажная продукция' }]

    return (
        <div className={style.filter}>
            <ul className={style.filter__list}>
                {filterItems.map((el, index) => {
                    if (el.type === filterType) { return <li onClick={()=>dispatch(catalogSlice.actions.setfilterType(el.type))} key={index} className={[style.filter__item, style.activeFilter].join(' ')}>{el.value}</li> }
                    else {
                        return <li onClick={()=>dispatch(catalogSlice.actions.setfilterType(el.type))} key={index} className={style.filter__item}>{el.value}</li>
                    }
                })}
            </ul>
        </div>
    )
}
export default Filter;