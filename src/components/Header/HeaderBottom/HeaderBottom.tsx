import style from './HeaderBottom.module.scss';
import { FC } from "react";
import img_logotip from './../../../assets/img/logotip.svg';
import Button from '../../common/Button/Button';
import img_catalog from './../../../assets/img/catalog.svg';
import img_catalog_mob from './../../../assets/img/catalog_mob.svg';
import Input from '../../common/Input/Input';
import img_search from './../../../assets/img/search.svg';
import img_search_mob from './../../../assets/img/search_mob.svg';
import img_operator from './../../../assets/img/operator.png';
import img_download from './../../../assets/img/download.svg';
import img_cart from './../../../assets/img/cart.svg';
import { useNavigate } from 'react-router-dom';
import { useAppDisaptch, useAppSelector } from '../../../hooks/redux';
import {catalogSlice} from '../../../store/reducers/catalogSlice';

const HeaderBottom: FC = () => {
    const { groupedProductsInBasket,priceInBasket } = useAppSelector((state => state.basketSlice));
    
    const navigate = useNavigate();
    const dispatch = useAppDisaptch();
    
    const handleChange = (value: string) => {

    }

    return (
        <div className={style.wrapper}>
            <div className="container">
                <div className={style.header}>
                    <div className={style.burger}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div onClick={()=>{dispatch(catalogSlice.actions.toggleAdmin())}} className={style.logotipe}>
                        <img src={img_logotip} alt="logotip" />
                    </div>
                    <div className={style.btn} onClick={() => { navigate(`/catalog`) }}>
                        <Button size='big' text='Каталог' img={img_catalog} />
                    </div>
                    <div className={style.input}>
                        <Input value='' placeholder='Поиск...' img={img_search} handleChange={handleChange} />
                    </div>
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
                    <div className={style.cart} onClick={() => { navigate(`/basket`) }}>
                        <div className={style.cart__img}>
                            <img src={img_cart} alt="cart" />
                            <div className={style.cart__count}>
                                {groupedProductsInBasket.reduce((sum, product) => sum + product.count, 0)}
                            </div>
                        </div>
                        <div className={style.cart__text}>
                            <div className={style.cart__title}>
                                Корзина
                            </div>
                            <div className={style.cart__price}>
                                {priceInBasket+' ₸'} 
                            </div>
                        </div>
                    </div>

                </div>
                <div className={style.mobile__btn}>
                    <button onClick={() => { navigate(`/catalog`) }}>
                        <img src={img_catalog_mob} alt="catalog" />
                        <p>Каталог</p>
                    </button>
                    <button>
                        <img src={img_search_mob} alt="search" />
                        <p>Поиск</p>
                    </button>
                </div>

            </div>
        </div>
    )
}
export default HeaderBottom;