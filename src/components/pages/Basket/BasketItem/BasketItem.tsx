import style from './BasketItem.module.scss';
import { FC } from "react";
import img_bottle from './../../../../assets/img/bottle.svg';
import img_bag from './../../../../assets/img/bag.svg';
import { IProduct } from '../../../../models/IProduct';
import DeleteBtn from '../../../common/DeleteBtn/DeleteBtn';

interface IProductItemProps {
    product: IProduct,
}

const BasketItem: FC<IProductItemProps> = ({ product }) => {
    return (
        <div className={style.product}>
            <div className={style.product__img}>
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
            <div className={style.product__count}>
                <div className={style.countContainer}>
                <button>-</button>
                <div className={style.number}>
                    1
                </div>
                <button>+</button>
                </div>
            </div>
            <div className={style.product__price}>
                {product.price}{' '+'₸'}
            </div>
            <div className={style.product__delete}>
                <DeleteBtn />
            </div>
        </div>
    )
}
export default BasketItem;