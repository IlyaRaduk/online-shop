import style from './Brend.module.scss';
import { FC } from "react";
import Input from '../../../../common/Input/Input';
import img_search from './../../../../../assets/img/search.svg';
import img_sort from './../../../../../assets/img/sort.svg';

const Brend: FC = () => {
    const handleChange = (value: string) => {

    }
    return (
        <div className={style.brend}>
            <p className={style.brend__title}>
                Производитель
            </p>
            <Input handleChange={handleChange} placeholder='Поиск...' value='' img={img_search} />
            <div className={style.brend__list}>
                <div className={style.brend__item}>
                    <input id='1' type="checkbox" />
                    <label htmlFor="1">Grifon</label>
                </div>
                <div className={style.brend__item}>
                    <input id='2' type="checkbox" />
                    <label htmlFor="2">Boyscout</label>
                </div>
                <div className={style.brend__item}>
                    <input id='3' type="checkbox" />
                    <label htmlFor="3">Paclan</label>
                </div>
                <div className={style.brend__item}>
                    <input id='4' type="checkbox" />
                    <label htmlFor="4">Булгари Грин</label>
                </div>
                <div className={style.brend__show}>
                    <span>Показать всё</span>
                    <img  className={style.brend__img} src={img_sort} alt="" />
                </div>
            </div>

        </div>
    )
}
export default Brend;