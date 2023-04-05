import style from './Products.module.scss';
import { FC } from "react";
import ProductItem from './ProductItem/ProductItem';
import img_left from './../../../../assets/img/left.svg';
import img_right from './../../../../assets/img/right.svg';
import { useAppSelector, useAppDisaptch } from '../../../../hooks/redux';
import { catalogSlice } from '../../../../store/reducers/catalogSlice';
import Button from '../../../common/Button/Button';
import ModalCreateProduct from './ModalCreateProduct/ModalCreateProduct';
import { modalCreateProductSlice } from '../../../../store/reducers/modalCreateProductSlice';




const Products: FC = () => {

    const { products, pagesCount, currentPage } = useAppSelector((state => state.catalogSlice));
    const { isAdmin} = useAppSelector((state => state.catalogSlice));
    const { isModalCreateProduct } = useAppSelector((state => state.modalCreateProductSlice));
    const dispatch = useAppDisaptch();

    const pages: JSX.Element[] = createPages(pagesCount);

    function createPages(pages: number): JSX.Element[] {
        let arr: JSX.Element[] = [];
        for (let i = 1; i <= pages; i++) {
            if (i == currentPage) {
                arr.push(<div key={i} onClick={() => dispatch(catalogSlice.actions.setCurrentPage(i))} className={[style.pages__item, style.active].join(' ')}>
                    {i}
                </div>)
            }
            else {
                arr.push(<div key={i} onClick={() => dispatch(catalogSlice.actions.setCurrentPage(i))} className={style.pages__item}>
                    {i}
                </div>)
            }
        }
        return arr;
    }

    return (
        <>
            {isModalCreateProduct ? <ModalCreateProduct /> : null}

            <div className={style.products}>
                {isAdmin ? <div className={style.products__create}>
                    <div onClick={() => { dispatch(modalCreateProductSlice.actions.onModalCreateProduct({type:'add',product:null})) }} className={style.btn}>
                        <Button size={'big'} text={'Добавить товар'} img='' />
                    </div>
                </div>
                    : null
                }
                {products.length !== 0 ?
                    products.map((el) => <div className={style.product} key={el.barcode}> <ProductItem product={el} /></div>)
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