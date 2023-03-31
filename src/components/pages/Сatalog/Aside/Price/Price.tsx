import style from './Price.module.scss';
import { FC } from "react";

const Price: FC = () => {
    return (
        <div className={style.price}>
            <div className={style.price__title}>
                Цена <span>₸</span>
            </div>
            <div className={style.price__counts}>
                <input className={style.price__count} type="text" />
                <span>-</span>
                <input className={style.price__count} type="text" />
            </div>
        </div>
    )
}
export default Price;