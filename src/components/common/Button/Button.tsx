import style from './Button.module.scss';
import { FC } from "react";

interface IButtonProps {
    size: 'big' | 'normal';
    text: string;
    img: string;
}

const Button: FC<IButtonProps> = ({ size, text, img }) => {

    let rootClasses = style.button;
    if (size === 'big') {
        rootClasses = style.buttonBig;
    } else {
        rootClasses = style.button;
    }


    return (
        <button className={rootClasses}>
            <p className={style.text}>{text}</p>
            <div className={style.img}>
                {img === '' ? null : <img src={img} alt="button_icon" />}
            </div>
        </button>
    )
}
export default Button;