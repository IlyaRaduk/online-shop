import style from './HeaderTop.module.scss'
import { FC } from "react";
import icons_location from './../../../assets/img/location_icon.svg'
import icons_mail from './../../../assets/img/mail_icon.svg'
const HeaderTop: FC = () => {
    return (
        <nav className={style.nav}>
            <div className={style.location}>
                <div className={style.location__address}>
                    <div className={style.location__icon}>
                        <img src={icons_location} alt="location" />
                    </div>
                    <div>
                        <p className={style.location__text}>
                            г. Кокчетав, ул. Ж. Ташенова 129Б
                        </p>
                        <p className={style.location__subtext}>
                            (Рынок Восточный)
                        </p>
                    </div>
                </div>
                <div className={style.mail}>
                    <div className={style.mail__icon}>
                        <img src={icons_mail} alt="mail" />
                    </div>
                    <div>
                        <a className={style.mail__text} href="mailto:opt.sultan@mail.ru">opt.sultan@mail.ru </a>
                        <p className={style.mail__subtext}>На связи в любое время</p>
                    </div>
                </div>
            </div>
            <ul className={style.menu}>
                <li className={style.menu__item}><a href="#">О компании</a> </li>
                <li className={style.menu__item}><a href="#">Доставка и оплата</a></li>
                <li className={style.menu__item}><a href="#">Возврат</a></li>
                <li className={style.menu__item}><a href="#">Контакты</a></li>
            </ul>
        </nav>
    )
}
export default HeaderTop;