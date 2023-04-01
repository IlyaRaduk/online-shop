import style from './Catalog.module.scss';
import { FC } from "react";
import Aside from './Aside/Aside';
import Products from './Products/Products';

const Сatalog: FC = () => {
    return (
        <main>
            <div className={style.catalog}>
                <p className={style.catalog__title}>
                    Косметика и гигиена
                </p>
                <div className={style.catalog__sort} >
                    <label className={style.catalog__label} htmlFor="sort">Сортировка:</label>
                    <select name="sort" id="sort">
                        <option className="" value="1">по убыванию цены</option>
                        <option className="" value="1">по возрастанию цены</option>
                        <option selected className="" value="1">по названию</option>
                        <option className="" value="1">по названию с конца</option>
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