import style from './Catalog.module.scss';
import { FC } from "react";
import Aside from './Aside/Aside';
import Products from './Products/Products';

const Сatalog: FC = () => {
    return (
        <main className={style.catalog}>
            <div className={style.titleLine}>
                <p className={style.titleLine__title}>
                    Косметика и гигиена
                </p>
                <div>
                    <label className={style.titleLine__label} htmlFor="sort">Сортировка:</label>
                    <select className={style.titleLine__sort} name="" id="sort">
                        <option className="" value="1">по убыванию цены</option>
                        <option className="" value="1">по возрастанию цены</option>
                        <option selected className="" value="1">по названию</option>
                        <option className="" value="1">по названию с конца</option>
                    </select>
                </div>
            </div>
            <div className={style.filter}>
                <ul className={style.filter__list}>
                    <li className={style.filter__item}>Уход <br /> за телом</li>
                    <li className={style.filter__item}>Уход <br />за руками</li>
                    <li className={style.filter__item}>Уход <br />за ногами</li>
                    <li className={style.filter__item}>Уход <br />за лицом</li>
                    <li className={style.filter__item}>Уход  <br />за волосами</li>
                    <li className={style.filter__item}>Средства <br />  для загара</li>
                    <li className={style.filter__item}>Средства <br /> для бритья</li>
                    <li className={style.filter__item}>Подарочные <br /> наборы</li>
                    <li className={style.filter__item}>Гигиеническая <br /> продукция</li>
                    <li className={style.filter__item}>Гигиена <br /> полости рта</li>
                    <li className={style.filter__item}>Бумажная <br /> продукция</li>
                </ul>
            </div>
            <div className={style.content}>
                <Aside />
                <Products />
            </div>
    
        </main>
    )
}
export default Сatalog;