import style from './Footer.module.scss';
import { FC } from "react";
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import img_logotip from './../../assets/img/logotip2.svg';
import img_right from './../../assets/img/right2.svg';
import img_download from './../../assets/img/download.svg';
import img_viber from './../../assets/img/viber.svg';
import img_telegram from './../../assets/img/telegram.svg';
import img_visa from './../../assets/img/visa.svg';
import img_mastercard from './../../assets/img/mastercard.svg';

const Footer: FC = () => {
    const handleChange = (value: string) => {

    }

    return (
        <div className={style.wrapper}>
            <div className='container'>
                <footer className={style.footer}>
                    <div className={style.about}>
                        <div className={style.about__logo}>
                            <img src={img_logotip} alt="logotip" />
                        </div>
                        <div className={style.about__description}>
                            Компания «Султан» — снабжаем розничные магазины товарами
                            "под ключ" в Кокчетаве и Акмолинской области
                        </div>
                        <div className={style.about__disc}>
                            Подпишись на скидки и акции
                        </div>
                        <div className={style.about__input}>
                            <Input value='' placeholder='Введите ваш E-mail' img={img_right} handleChange={handleChange} />
                        </div>
                    </div>
                    <div className={style.menu}>
                        <p className={style.menu__title}>
                            Меню сайта:
                        </p>
                        <ul className={style.menu__list}>
                            <li className={style.menu__item}>О компании</li>
                            <li className={style.menu__item}>Доставка и оплата</li>
                            <li className={style.menu__item}>Возврат</li>
                            <li className={style.menu__item}>Контакты</li>
                        </ul>
                    </div>
                    <div className={style.category}>
                        <p className={style.category__title}>
                            Категории:
                        </p>
                        <ul className={style.category__list}>
                            <li className={style.category__item}>Бытовая химия</li>
                            <li className={style.category__item}>Косметика и гигиена</li>
                            <li className={style.category__item}>Товары для дома</li>
                            <li className={style.category__item}>Товары для детей и мам</li>
                            <li className={style.category__item}>Посуда</li>
                        </ul>
                    </div>
                    <div className={style.download}>
                        <p className={style.download__title}>
                            Скачать прайс-лист:
                        </p>
                        <Button size='big' text='Прайс-лист' img={img_download} />
                        <p className={style.download__contacts}>
                            Связь в мессенджерах:
                        </p>
                        <div className={style.download__social}>
                            <img src={img_viber} alt="viber" />
                            <img src={img_telegram} alt="telegram" />
                        </div>
                    </div>
                    <div className={style.contacts}>
                        <p className={style.contacts__title}>
                            Контакты:
                        </p>
                        <div className={style.contacts__tel}>
                            <div className={style.number}>
                                <a href="tel:+77774900091">+7 (777) 490-00-91</a>
                            </div>
                            <p>
                                время работы: 9:00-20:00
                            </p>
                            <button>Заказать звонок</button>
                        </div>
                        <div className={style.contacts__mail}>
                            <div>
                                <a href="mailto:opt.sultan@mail.ru">opt.sultan@mail.ru </a>
                            </div>
                            <p>
                                На связи в любое время
                            </p>
                        </div>
                        <div className={style.contacts__cards}>
                            <div className={style.contacts__cardsList}>
                                <img src={img_visa} alt="visa" />
                                <img src={img_mastercard} alt="mastercard" />
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
export default Footer;