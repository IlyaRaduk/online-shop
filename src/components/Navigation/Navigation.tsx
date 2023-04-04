import style from './Navigation.module.scss'
import { FC } from "react";
import img_vector from './../../assets/img/vector.svg'
import { useNavigate } from 'react-router-dom';

const Navigation: FC = () => {
    const navigate = useNavigate();
    
    return (
        <nav className={style.nav}>
            <ul className={style.nav__list}>
                <li className={style.nav__itemActive}><a href="#">Главная</a></li>
                <li className={style.nav__item}><a href="#">Косметика и гигиена</a></li>
            </ul>
            <div onClick={() => { navigate(`/catalog`) }} className={style.nav__back}>
                <button>
                    <img src={img_vector} alt="vector" />
                </button>
                <p>Назад</p>
            </div>
        </nav>
    )
}
export default Navigation;