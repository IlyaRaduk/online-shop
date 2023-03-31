import style from './Navigation.module.scss'
import { FC } from "react";

const Navigation: FC = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.nav__list}>
                <li className={style.nav__itemActive}><a href="#">Главная</a></li>
                <li className={style.nav__item}><a href="#">Косметика и гигиена</a></li>
            </ul>
        </nav>
    )
}
export default Navigation;