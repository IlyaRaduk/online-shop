import style from './Header.module.scss'
import { FC } from "react";
import HeaderTop from './HeaderTop/HeaderTop';
import HeaderBottom from './HeaderBottom/HeaderBottom';

const Header: FC = () => {
    return (
        <header>
            <div className='container'>
                <HeaderTop/>
            </div>
            <HeaderBottom/>
        </header>
    )
}
export default Header;