import { FC, useEffect } from 'react';
import style from './CatalogItem.module.scss';
import { IProduct } from '../../../models/IProduct';
import img_bag from './../../../assets/img/bag.svg';
import img_bottle from './../../../assets/img/bottle.svg';
import Button from '../../common/Button/Button';
import img_basket from './../../../assets/img/basket2.svg';
import img_share from './../../../assets/img/share.svg';
import img_download from './../../../assets/img/download2.svg';
import img_sort from './../../../assets/img/sort.svg';
import { useParams } from 'react-router-dom';
import { useAppDisaptch, useAppSelector } from '../../../hooks/redux';
import fetchOneProduct from '../../../store/thunkCreators/fetchOneProduct';


const CatalogItem: FC = () => {

    const params = useParams();
    const {product} = useAppSelector((state => state.productSlice));
    const dispatch = useAppDisaptch();

    useEffect(() => {
        dispatch(fetchOneProduct(Number(params.id)))
    }, [])

    return (
        <div className={style.product}>
            <div className={style.product__img}>
                <img src={product.url} alt="photo" />
            </div>
            <div className={style.product__text}>
                <p className={style.product__stock}>
                    В наличии
                </p>
                <div className={style.product__name}>
                    <span className={style.product__brend}>{product.brend}</span>{' ' + product.name}
                </div>
                <div className={style.product__size}>
                    {product.type === 'bottle' ? <img src={img_bottle} alt="size" />
                        : <img src={img_bag} alt="size" />
                    }
                    <p> {product.size}</p>
                </div>
                <div className={style.product__order}>
                    <div className={style.product__price}>
                        {product.price}{' '+'₸'}
                    </div>
                    <div className={style.product__count}>
                        <button>-</button>
                        <div className={style.number}>
                            1
                        </div>
                        <button>+</button>
                    </div>
                    <div className={style.product__btn}>
                        <Button size='big' text='В корзину' img={img_basket} />
                    </div>
                    <div className={style.product__share}>
                        <img src={img_share} alt="share" />
                    </div>
                    <div className={style.product__disk}>
                        При покупке от <span> 10 000 ₸</span> бесплатная доставка по Кокчетаву и области
                    </div>
                    <div className={style.product__download}>
                        <span>Прайс-лист</span>  <img src={img_download} alt="download" />
                    </div>
                </div>
                <div className={style.product__info}>
                    <p>Производитель: <span>{' ' + product.manufacturer} </span></p>
                    <p>Бренд: <span>{' ' + product.brend} </span></p>
                    <p>Артикул:: <span>{' ' + product.barcode} </span></p>
                    <p>Штрихкод: <span>{' ' + product.barcode} </span></p>
                </div>
                <div className={style.product__description}>
                    <div className={style.title}>
                        Описание  <img src={img_sort} alt="sort" />
                    </div>

                    <div className={style.list}>
                        {product.description}
                    </div>
                </div>
                <div className={style.product__properties}>
                     <div className={style.title}>
                        Характеристики  <img src={img_sort} alt="sort" />
                    </div>
                    <div className={style.list}>
                        <p>Назначение: <span>BioMio</span></p>
                        <p>Тип: <span>BioMio</span></p>
                        <p>Производитель: <span>{product.manufacturer}</span></p>
                        <p>Бренд: <span>{product.brend}</span></p>
                        <p>Артикул: <span>{product.barcode}</span></p>
                        <p>Размер: <span>{product.size}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CatalogItem;
