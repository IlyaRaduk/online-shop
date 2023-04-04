import style from './BasketItem.module.scss';
import { FC } from "react";
import img_bottle from './../../../../assets/img/bottle.svg';
import img_bag from './../../../../assets/img/bag.svg';
import { IProductWithCount } from '../../../../models/Interface'; 
import DeleteBtn from '../../../common/DeleteBtn/DeleteBtn';
import { useNavigate } from 'react-router-dom';
import { useAppDisaptch } from '../../../../hooks/redux';
import {basketSlice} from '../../../../store/reducers/basketSlice';

interface IProductItemProps {
    product: IProductWithCount,
}

const BasketItem: FC<IProductItemProps> = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useAppDisaptch();
    
    return (
        <div className={style.product}>
            <div onClick={() => navigate(`/item/${product.barcode}`)} className={style.product__img}>
                <img src={product.url} alt="product" />
            </div>
            <div className={style.product__text}>
                <div className={style.product__size}>
                    {product.type === 'bottle' ? <img src={img_bottle} alt="size" />
                        : <img src={img_bag} alt="size" />
                    }
                    <p> {product.size}</p>
                </div>
                <p className={style.product__title}>
                    {product.brend}{' ' + product.name}
                </p>
                <div className={style.product__description}>
                    {product.description}
                </div>
            </div>
            <div className={style.orderContainer}>  
                <div className={style.product__count}>
                    <div className={style.countContainer}>
                        <button onClick={()=>dispatch(basketSlice.actions.removeOneFromBasket(product))}>-</button>
                        <div className={style.number}>
                            {product.count}
                        </div>
                        <button onClick={()=>dispatch(basketSlice.actions.addInBasket(product))}>+</button>
                    </div>
                </div>
                <div className={style.product__price}>
                    {product.price*product.count}{' ' + '₸'}
                </div>
                <div onClick={()=>dispatch(basketSlice.actions.removeFromBasket(product))} className={style.product__delete}>
                    <DeleteBtn />
                </div>
            </div>
        </div>
    )
}
export default BasketItem;