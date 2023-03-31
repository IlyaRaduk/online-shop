import style from './DeleteBtn.module.scss';
import { FC } from "react";
import img_delete from './../../../assets/img/delete.svg';

const DeleteBtn: FC = () => {


    return (
        <button className={style.delete}>
            <img src={img_delete} alt="delete" />
        </button>
    )
}
export default DeleteBtn;