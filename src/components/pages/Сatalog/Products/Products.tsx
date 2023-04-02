import style from './Products.module.scss';
import { FC } from "react";
import { IProduct } from './../../../../models/IProduct';
import ProductItem from './ProductItem/ProductItem';
import img_left from './../../../../assets/img/left.svg';
import img_right from './../../../../assets/img/right.svg';
import { useAppSelector } from '../../../../hooks/redux';




const Products: FC = () => {

    const { products } = useAppSelector((state => state.catalogSlice));

    return (
        <>
            <div className={style.products}>
                { products.length !==0?
                    products.map((el, index) => <div className={style.product} key={index}> <ProductItem product={el} /></div>)
                    : <div>Товар не найден</div>
                }
                <div>
                    <div className={style.pages}>
                        <div className={style.pages__left}>
                            <img src={img_left} alt="left" />
                        </div>
                        <div className={style.pages__list}>
                            <div className={[style.pages__item, style.active].join(' ')}>
                                1
                            </div>
                            <div className={style.pages__item}>
                                2
                            </div>
                            <div className={style.pages__item}>
                                3
                            </div>
                        </div>
                        <div className={style.pages__right}>
                            <img src={img_right} alt="right" />
                        </div>
                    </div>
                    <div className={style.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam interdum ut justo, vestibulum sagittis iaculis iaculis.
                        Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur
                        aliquet sed pellentesque consequat consectetur congue mauris venenatis.
                        Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
                    </div>
                </div>
            </div>

        </>
    )
}
export default Products;