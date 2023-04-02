import style from './Products.module.scss';
import { FC } from "react";
import ProductItem from './ProductItem/ProductItem';
import img_left from './../../../../assets/img/left.svg';
import img_right from './../../../../assets/img/right.svg';
import { useAppSelector, useAppDisaptch } from '../../../../hooks/redux';
import { catalogSlice } from '../../../../store/reducers/catalogSlice'; 




const Products: FC = () => {

    const { products, pagesCount, currentPage } = useAppSelector((state => state.catalogSlice));
    const dispatch = useAppDisaptch();

    const pages: JSX.Element[] = createPages(pagesCount);

    function createPages(pages: number): JSX.Element[] {
        let arr: JSX.Element[] = [];
        for (let i = 1; i <= pages; i++) {
            if (i == currentPage) {
                arr.push(<div onClick={()=>dispatch(catalogSlice.actions.setCurrentPage(i))} className={[style.pages__item, style.active].join(' ')}>
                    {i}
                </div>)
            }
            else {
                arr.push(<div onClick={()=>dispatch(catalogSlice.actions.setCurrentPage(i))} className={style.pages__item}>
                    {i}
                </div>)
            }
        }
        return arr;
    }

    return (
        <>
            <div className={style.products}>
                {products.length !== 0 ?
                    products.map((el, index) => <div className={style.product} key={index}> <ProductItem product={el} /></div>)
                    : <div>Товар не найден</div>
                }
                <div>
                    <div className={style.pages}>
                        <div className={style.pages__left}>
                            <img src={img_left} alt="left" />
                        </div>
                        <div className={style.pages__list}>
                            {pages}
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