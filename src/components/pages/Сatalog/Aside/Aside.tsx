import style from './Aside.module.scss';
import { FC } from "react";
import Price from './Price/Price';
import Brend from './Brend/Brend';
import Filter from './Filter/Filter';
import Button from '../../../common/Button/Button';
import DeleteBtn from '../../../common/DeleteBtn/DeleteBtn';

const Aside: FC = () => {
    return (
        <aside className={style.aside}>
            <div className={style.aside__title}>
                Подбор по параметрам
            </div>
            <div className={style.aside__price}>
                <Price />
            </div>

            <div className={style.aside__brend}>
                <Brend />
            </div>
            <div className={style.aside__submit}>
                <Button size='big' text='Показать'img={''}/>
                <DeleteBtn/>
            </div>
            <div className={style.aside__filter}>
                <Filter />
            </div>
        </aside>
    )
}
export default Aside;