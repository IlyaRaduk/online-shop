import style from './Input.module.scss';
import { FC } from "react";

interface IInputnProps {
    value: string;
    placeholder: string;
    img: string;
    handleChange: (e: string) => void;
}

const Input: FC<IInputnProps> = ({ value, placeholder, img, handleChange }) => {

    return (
        <div className={style.input}>
            <input onChange={(e)=>handleChange(e.target.value)} type="text" placeholder={placeholder} value={value} />
            <button className={style.input__img}>
                <img src={img} alt="search" />
            </button>
        </div>
    )
}
export default Input;