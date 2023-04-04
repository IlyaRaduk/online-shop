import { FC } from 'react';
import style from './Basket.module.scss';
import { IProduct } from '../../../models/Interface';
import BasketItem from './BasketItem/BasketItem';
import Button from '../../common/Button/Button';
import { useAppSelector,useAppDisaptch } from '../../../hooks/redux';
import {basketSlice} from '../../../store/reducers/basketSlice';



const Basket: FC = () => {
  const { groupedProductsInBasket, priceInBasket } = useAppSelector((state => state.basketSlice));
  const dispatch = useAppDisaptch();

  return (
    <div className={style.basket}>
      <p className={style.basket__title}>
        Корзина
      </p>
      {groupedProductsInBasket.length === 0
        ? <div className={style.basket__empty}>Корзина пуста</div>
        : groupedProductsInBasket.map((el, index) => (
          <div className={style.product} key={index}>
            <BasketItem product={el} />
          </div>
        ))
      }
      <div className={style.basket__order}>
        <div onClick={() => { if (groupedProductsInBasket.length === 0) { alert('Корзина пуста!') } else {dispatch(basketSlice.actions.clearBasket()); alert('Спасибо за заказ!') } }} className={style.basket__btn}>
          <Button size='big' text='Оформить заказ' img='' />
        </div>
        <div className={style.basket__price}>
          {priceInBasket + '₸'}
        </div>
      </div>
    </div>
  )
}
export default Basket;
