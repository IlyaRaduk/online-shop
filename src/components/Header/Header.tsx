import style from './Header.module.scss'
import { FC } from "react";
import HeaderTop from './HeaderTop/HeaderTop';
import HeaderBottom from './HeaderBottom/HeaderBottom';

const Header: FC = () => {
    return (
        <header>
            <div className={style.header__top}>
                <div className='container'>
                    <HeaderTop />
                </div>
            </div>
            <div className={style.header__bottom}>
                <HeaderBottom />
            </div>
        </header>
    )
}
export default Header;