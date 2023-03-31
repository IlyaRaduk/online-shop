import style from './HeaderBottom.module.scss';
import { FC } from "react";
import img_logotip from './../../../assets/img/logotip.svg';
import Button from '../../common/Button/Button';
import img_catalog from './../../../assets/img/catalog.svg';
import Input from '../../common/Input/Input';
import img_search from './../../../assets/img/search.svg';
import img_operator from './../../../assets/img/operator.png';
import img_download from './../../../assets/img/download.svg';
import img_cart from './../../../assets/img/cart.svg';

const HeaderBottom: FC = () => {

    const handleChange = (value: string) => {

    }

    return (
        <div className={style.wrapper}>
            <div className="container">
                <div className={style.header}>
                    <div className={style.logotipe}>
                        <img src={img_logotip} alt="logotip" />
                    </div>
                    <div className={style.btn}>
                        <Button size='big' text='Каталог' img={img_catalog} />
                    </div>
                    <Input value='' placeholder='Поиск...' img={img_search} handleChange={handleChange} />
                    <div className={style.callback}>
                        <div className={style.callback__content}>
                            <p className={style.callback__title}>
                                <a href="tel:+77774900091">+7 (777) 490-00-91</a>
                            </p>
                            <p className={style.callback__description}>
                                время работы: 9:00-20:00
                            </p>
                            <button className={style.callback__btn}>
                                Заказать звонок
                            </button>
                        </div>
                        <div className={style.callback__img}>
                            <img src={img_operator} alt="operator" />
                        </div>
                    </div>
                    <div className={style.btn}>
                        <Button size='big' text='Прайс-лист' img={img_download} />
                    </div>
                    <div className={style.cart}>
                        <div className={style.cart__img}>
                            <img src={img_cart} alt="cart" />
                            <div className={style.cart__count}>
                                3
                            </div>
                        </div>
                        <div className={style.cart__text}>
                            <div className={style.cart__title}>
                                Корзина
                            </div>
                            <div className={style.cart__price}>
                                12 478 ₸
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default HeaderBottom;