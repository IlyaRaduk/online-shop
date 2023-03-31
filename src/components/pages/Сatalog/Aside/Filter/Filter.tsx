import style from './Filter.module.scss';
import { FC } from "react";

const Filter: FC = () => {

    return (
        <div className={style.filter}>
            <p className={style.filter__title}>
                Уход за телом
            </p>
            <ul className={style.filter__list}>
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
    )
}
export default Filter;