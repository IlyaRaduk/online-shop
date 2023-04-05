import style from './ProductItem.module.scss';
import { FC } from "react";
import Button from '../../../../common/Button/Button';
import img_basket from './../../../../../assets/img/basket2.svg';
import { IProduct } from '../../../../../models/Interface';
import img_bottle from './../../../../../assets/img/bottle.svg';
import img_bag from './../../../../../assets/img/bag.svg';
import img_cross from './../../../../../assets/img/cross.svg';
import img_pencil from './../../../../../assets/img/pencil.svg';
import { useNavigate } from 'react-router-dom';
import { basketSlice } from '../../../../../store/reducers/basketSlice';
import { useAppDisaptch, useAppSelector } from '../../../../../hooks/redux';
import removeProduct from '../../../../../store/thunkCreators/removeProduct';
import { modalCreateProductSlice } from '../../../../../store/reducers/modalCreateProductSlice';

interface IProductItemProps {
    product: IProduct,
}

const ProductItem: FC<IProductItemProps> = ({ product }) => {
    const { isAdmin } = useAppSelector((state => state.catalogSlice));
    const { currentPage, sort } = useAppSelector((state => state.catalogSlice));
    const dispatch = useAppDisaptch();
    const navigate = useNavigate();

    return (
        <div className={style.product}>
            {isAdmin ? <div className={style.product__edit} >
                <img className={style.edit} onClick={() => dispatch(modalCreateProductSlice.actions.onModalCreateProduct({type:'edit',product:product}))} src={img_pencil} alt='pencil' />
                <img className={style.remove} onClick={() => dispatch(removeProduct(product, currentPage, sort))} src={img_cross} alt='cross' />
            </div> : null}
            <div className={style.product__img} onClick={() => navigate(`/item/${product.barcode}`)}>
                <img src={product.url} alt="product" />
            </div>
            <div className={style.product__size}>
                {product.type === 'bottle' ? <img src={img_bottle} alt="size" />
                    : <img src={img_bag} alt="size" />
                }
                <p> {product.size}</p>
            </div>
            <p className={style.product__title}>
                <span className={style.product__module}>{product.brend}</span> {product.name}
            </p>
            <p className={style.product__text}>
                Штрихкод: <span >{product.barcode}</span>
            </p>
            <p className={style.product__text}>
                Производитель <span >{product.manufacturer}</span>
            </p>
            <p className={style.product__text}>
                Бренд: <span >{product.brend}</span>
            </p>
            <div className={style.product__priceContainer}>
                <div className={style.product__price}>
                    <span>{product.price}</span>₸
                </div>
                <div onClick={() => dispatch(basketSlice.actions.addInBasket(product))}>
                    <Button size='normal' text='В корзину' img={img_basket} />
                </div>
            </div>
        </div>
    )
}
export default ProductItem;