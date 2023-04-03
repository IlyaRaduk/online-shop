import style from './Aside.module.scss';
import { FC } from "react";
import Price from './Price/Price';
import Brend from './Brend/Brend';
import Filter from './Filter/Filter';
import Button from '../../../common/Button/Button';
import DeleteBtn from '../../../common/DeleteBtn/DeleteBtn';
import img_vector from './../../../../assets/img/vector.svg';
import { useAppDisaptch, useAppSelector } from '../../../../hooks/redux';
import fetchAllProductsWithFilters from '../../../../store/thunkCreators/fetchAllProductsWithFilters';
import { catalogSlice } from '../../../../store/reducers/catalogSlice';

const Aside: FC = () => {
    const { sort, filterType, currentPage, startPriceFilter, endPriceFilter, filterBrends, mobileMenuActive } = useAppSelector((state => state.catalogSlice));
    const dispatch = useAppDisaptch();

    let rootClasses = [style.aside__closed];
    if (mobileMenuActive) {
        rootClasses = [style.aside__open]
    }

    return (
        <aside className={style.aside}>
            <div className={style.aside__title}>
                Подбор по параметрам
                <button onClick={() => { dispatch(catalogSlice.actions.toggleMobileMenu()) }}>
                    <img src={img_vector} alt="vector" />
                </button>
            </div>
            <div  className={rootClasses.join(' ')}>
                <div className={style.aside__price}>
                    <Price />
                </div>
                <div className={style.aside__brend}>
                    <Brend />
                </div>
                <div className={style.aside__submit}>
                    <div onClick={() => { dispatch(fetchAllProductsWithFilters(sort, filterType, currentPage, startPriceFilter, endPriceFilter, filterBrends)); if(mobileMenuActive){dispatch(catalogSlice.actions.toggleMobileMenu())}}} className={style.aside__btn}>
                        <Button size='big' text='Показать' img={''} />
                    </div>
                    <div onClick={() => { dispatch(catalogSlice.actions.removeAllFilter()) }} >
                        <DeleteBtn />
                    </div>
                </div>

                <div className={style.aside__filter}>
                    <Filter />
                </div>
            </div>


        </aside>
    )
}
export default Aside;